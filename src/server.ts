import { KeyedAccountInfo, PublicKey } from '@solana/web3.js';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import http from 'http';
import { BOX_OFFICE_ADDRESS, connection, GetAccountType } from './constants';
import './custom-logger';
import { Stringify } from './helper';
import { decodeAll } from './parseAccount';
import redisClient from './redis_client';

const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use(express.json());

type TicketData = Stringify<GetAccountType<'ticket'>> & { account: string };

// Store and index ticket data in Redis
async function processTicket(pubkey: PublicKey, buffer: any): Promise<boolean> {
  const decoded = decodeAll(buffer);
  
  // Only process if this is a ticket account
  if (decoded.type !== 'ticket') {
    return false;
  }
  
  const ticketData = decoded.data as Stringify<GetAccountType<'ticket'>>;
  const ticketKey = `ticket-${pubkey.toBase58()}`;
  
  // Add account identifier
  const enrichedTicketData: TicketData = {
    ...ticketData,
    account: pubkey.toBase58()
  };
  
  // Store the full ticket data
  await redisClient.set(ticketKey, JSON.stringify(enrichedTicketData));
  
  // Index by box office for efficient retrieval
  await redisClient.sadd(`tickets_by_boxoffice:${ticketData.boxOffice}`, ticketKey);
  
  console.log(`Processed ticket ${pubkey.toBase58()} for box office: ${ticketData.boxOffice}`);
  return true;
}

// Initialize and load data
async function init() {
  // Subscribe to account changes
  const subscriptionId = connection.onProgramAccountChange(
    BOX_OFFICE_ADDRESS,
    async (accountInfo: KeyedAccountInfo) => {
      await processTicket(accountInfo.accountId, accountInfo.accountInfo.data);
    },
    { commitment: 'confirmed' }
  );

  console.log(`Live updates subscription started. Subscription id: ${subscriptionId}`);
  
  // Load historical ticket data
  await loadHistoricalTickets();
}

// Load historical ticket data
async function loadHistoricalTickets() {
  console.log('Loading historical ticket data...');
  const accounts = await connection.getProgramAccounts(BOX_OFFICE_ADDRESS);
  console.log(`Found ${accounts.length} total accounts, filtering for tickets...`);

  let ticketCount = 0;
  let processedCount = 0;

  // Process all accounts, but only store ticket accounts
  for (const account of accounts) {
    processedCount++;
    if (processedCount % 100 === 0) {
      console.log(`Processed ${processedCount}/${accounts.length} accounts...`);
    }
    
    const isTicket = await processTicket(account.pubkey, account.account.data);
    if (isTicket) {
      ticketCount++;
    }
  }

  console.log('Historical data load complete:');
  console.log(`- Processed ${processedCount} accounts`);
  console.log(`- Found ${ticketCount} ticket accounts`);
}

// Get tickets for a specific box office
async function getTicketsByBoxOffice(boxOfficeId: string): Promise<TicketData[]> {
  // Get all ticket keys for this box office
  const ticketKeys = await redisClient.smembers(`tickets_by_boxoffice:${boxOfficeId}`);
  
  if (ticketKeys.length === 0) {
    return [];
  }
  
  // Retrieve all ticket data in a single pipeline operation
  const pipeline = redisClient.pipeline();
  ticketKeys.forEach(key => {
    pipeline.get(key);
  });
  
  const results = await pipeline.exec();
  const tickets = results!
    .map(result => {
      try {
        return JSON.parse(result[1] as string) as TicketData;
      } catch (e) {
        console.error('Error parsing ticket data:', e);
        return null;
      }
    })
    .filter(ticket => ticket !== null) as TicketData[];
  
  return tickets;
}

// Single endpoint for retrieving tickets by box office ID
app.get('/tickets', async (req, res) => {
  const boxOfficeId = req.query.boxOfficeId as string;
  
  if (!boxOfficeId) {
    res.status(400).json({ error: 'boxOfficeId parameter is required' });
    return;
  }
  
  try {
    console.log(`Retrieving tickets for box office: ${boxOfficeId}`);
    const tickets = await getTicketsByBoxOffice(boxOfficeId);
    
    res.json({
      boxOfficeId,
      ticketCount: tickets.length,
      tickets
    });
  } catch (error) {
    console.error('Error retrieving tickets:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Server startup
const PORT = process.env.PORT || 3000;
server.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`);

  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('Gracefully shutting down...');
    try {
      await redisClient.quit();
      console.log('Redis connection closed');
      server.close();
      console.log('HTTP server closed');
      process.exit(0);
    } catch (err) {
      console.error('Error during shutdown:', err);
      process.exit(1);
    }
  });

  // Initialize data and start subscriptions
  await init();
});