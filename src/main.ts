import { RegisterService } from './client/service/register/RegisterService';
import { httpClient } from './http/httpClient';
import { Ship } from './client/interface/components/Ship';

import accounts from '../accounts.json';
import { MyService } from './client/service/my/MyService';
import { list } from './list';
import { Contract } from './client/interface/components/Contract';

const BASE_URL = 'https://api.spacetraders.io/v2';
const register = async () => {
  const client = httpClient(BASE_URL);
  const registerService = new RegisterService({ send: client });
  const config = await registerService.register({
    faction: 'VOID',
    symbol: 'Fighter91',
  });

  console.log('config', JSON.stringify(config, null, 2));
};

const main = async () => {
  //await register();
  const account = accounts[0];
  console.log('Selected account: ' + account.data.agent.symbol);
  const client = httpClient(BASE_URL, {
    Authorization: `Bearer ${account.data.token}`,
  });
  const myService = new MyService({ send: client });

  const contractMap = await list<Contract>(
    (options) => myService.getContracts(options),
    (c) => c.id
  );
  const shipsMap = await list<Ship>(
    (options) => myService.getMyShips(options),
    (s) => s.symbol
  );

  console.log('contracts', JSON.stringify(contractMap, null, 2));

  const contractsAccepted = await Promise.all(
    (Object.values(contractMap) as Array<Contract>)
      .filter((c) => !c.accepted)
      .map((c) => myService.acceptContract({ contractId: c.id }))
  );
  console.log('Accepted contracts', contractsAccepted);
  console.log('ships', Object.keys(shipsMap));
};

main();
