require('colors');

const { showMenu } = require('./helpers/messages.js');

console.clear();

const main = async () => {
  console.log('hola mundo'.rainbow);

  showMenu();
};

main();
