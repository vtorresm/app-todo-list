require('colors');

const showMenu = () => {
  return new Promise((resolve, reject) => {
    console.clear();
    console.log('================================='.green);
    console.log('   Selecione una opción'.green);
    console.log('=================================\n'.green);

    console.log(`${'1.'.green} Crear tarea`);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Eliminar tarea`);
    console.log(`${'0.'.green} Salir\n`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question('Selecione la opción: ', (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve, reject) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${'ENTER'.blue} para continuar\n`, (opt) => {
      readline.close();
      resolve();
    });
  });
}

module.exports = {
  showMenu,
  pause,
};
