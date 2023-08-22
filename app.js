import 'colors';

import { saveDB, readDB } from './helpers/saveFile.js';
import {
  inquirerMenu,
  pause,
  readInput,
  listTasksDelete,
  confirm,
  showListChecklist,
} from './helpers/inquirer.js';
import Tasks from './models/tasks.js';

const main = async () => {
  let opt = '';
  const tasks = new Tasks();

  const tasksDB = readDB();

  if (tasksDB) {
    //TODO: cargar tareas
    tasks.loadingTasksFromArray(tasksDB);
  }

  do {
    //TODO: Imprimir el menú
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        //TODO: crear opcion
        const desc = await readInput('Descripción:');
        tasks.creatingTask(desc);
        break;

      case '2':
        tasks.listedComplete();
        break;

      case '3': //TODO: listar completadas
        tasks.listPendingCompleted(true);
        break;

      case '4': //TODO: listar pendientes
        tasks.listPendingCompleted(false);
        break;

      case '5': //TODO: completado | pendiente
        const ids = await showListChecklist(tasks.listadoArr);
        tasks.togglecompleted(ids);
        break;

      case '6': //TODO: Borrar
        const id = await listTasksDelete(tasks.listadoArr);
        if (id !== '0') {
          const ok = await confirm('¿Está seguro?');
          if (ok) {
            tasks.deleteTask(id);
            console.log('Tarea borrada');
          }
        }
        break;
    }

    saveDB(tasks.listArr);

    await pause();
  } while (opt !== '0');

  // pause();
};

main();
