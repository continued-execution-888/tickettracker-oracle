import { BOX_OFFICE_ADDRESS, coder, connection, GetAccountType, TAccounts, TBoxOffice } from './constants';
import { Stringify, stringify } from './helper';

export function decode<T extends TAccounts>(accountname: T, accountData: Buffer) {
  return stringify(coder.decode(accountname, accountData)) as Stringify<GetAccountType<T>>;
}
type DecodedAccount =
  | { type: 'boxOffice'; data: TBoxOffice }
  | { type: 'ticket'; data: Stringify<GetAccountType<'ticket'>> }
  | { type: 'whitelistState'; data: Stringify<GetAccountType<'whitelistState'>> }
  | { type: 'Unkown'; data: {} };

export function decodeAll(accountData: Buffer): DecodedAccount {
  try {
    return {
      type: 'boxOffice',
      data: decode('boxOffice', accountData),
    };
  } catch (error) {}
  try {
    return { type: 'ticket', data: decode('ticket', accountData) };
  } catch (error) {}
  try {
    return {
      type: 'whitelistState',
      data: decode('whitelistState', accountData),
    };
  } catch (error) {}
  return { type: 'Unkown', data: {} };
}

async function main() {
  const accounts = await connection.getProgramAccounts(BOX_OFFICE_ADDRESS);
  accounts.forEach(async (account) => {
    console.log(decodeAll(account.account.data));
  });
}

if (require.main === module) {
  main();
}
