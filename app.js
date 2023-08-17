require('colors');

const { showMenu, pause } = require('./helpers/messages.js');

console.clear();

const main = async () => {
  console.log('hola mundo'.rainbow);

  let opt = '';

  do {
    opt = await showMenu();
    console.log({ opt });

    if (opt !== '0') await pause();
  } while (opt !== '0');

  // pause();
};

main();
