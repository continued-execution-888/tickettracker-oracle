require('dotenv').config();
import { BorshAccountsCoder, Program } from '@coral-xyz/anchor';
import { Connection, PublicKey } from '@solana/web3.js';
import { BoxOfficeIDL } from './box_office_idl';
import { Stringify } from './helper';

export const COMMITMENT_LEVEL = 'confirmed';
export const network = 'mainnet';

export const connection = new Connection(`https://${network}.helius-rpc.com/?api-key=${process.env.HELIUS_API_KEY}`);
export const BOX_OFFICE_ADDRESS = new PublicKey('BoXv1oEqCChP5j1oxq62Wr9ZGA3m4G6AErGBS86vtaGQ');
export const BOX_OFFICE_PROGRAM = new Program(BoxOfficeIDL, BOX_OFFICE_ADDRESS, { connection });
export const coder = new BorshAccountsCoder(BoxOfficeIDL);
export type TAccounts = 'boxOffice' | 'ticket' | 'whitelistState';
export type TRedisKey = `${TAccounts | 'Unkown'}-${string}`;
export type GetAccountType<T extends keyof (typeof BOX_OFFICE_PROGRAM)['account']> = Awaited<
  ReturnType<(typeof BOX_OFFICE_PROGRAM)['account'][T]['fetch']>
>;
export type TBoxOffice = Stringify<GetAccountType<'boxOffice'>> & { account?: string };
