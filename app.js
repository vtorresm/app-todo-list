import 'colors';

//const { inquirerMenu, pause } = require('./helpers/inquirer.js');
import { inquirerMenu, pause } from './helpers/inquirer.js';

console.clear();

const main = async () => {
  console.log('hola mundo'.rainbow);

  let opt = '';

  do {
    opt = await inquirerMenu();
    console.log({ opt });

    await pause();
  } while (opt !== '0');

  // pause();
};

main();
