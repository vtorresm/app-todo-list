import 'colors';

import { saveDB, readDB } from './helpers/saveFile.js';
import {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
} from './helpers/inquirer.js';

import Tareas from './models/tasks.js';

const main = async() => {

  let opt = '';
  const tareas = new Tareas();

  const tareasDB = readDB();

  if ( tareasDB ) { // cargar tareas
      tareas.cargarTareasFromArray( tareasDB );
  }

  do {
      // Imprimir el menú
      opt = await inquirerMenu();

      switch (opt) {
          case '1':
              // crear opcion
              const desc = await leerInput('Descripción:');
              tareas.crearTarea( desc );
          break;

          case '2':
              tareas.listadoCompleto();
          break;

          case '3': // listar completadas
              tareas.listarPendientesCompletadas(true);
          break;

          case '4': // listar pendientes
              tareas.listarPendientesCompletadas(false);
          break;

          case '5': // completado | pendiente
              const ids = await mostrarListadoChecklist( tareas.listadoArr );
              tareas.toggleCompletadas( ids );
          break;

          case '6': // Borrar
              const id = await listadoTareasBorrar( tareas.listadoArr );
              if ( id !== '0' ) {
                  const ok = await confirmar('¿Está seguro?');
                  if ( ok ) {
                      tareas.borrarTarea( id );
                      console.log('Tarea borrada');
                  }
              }
          break;

      }


      saveDB( tareas.listadoArr );

      await pausa();

  } while( opt !== '0' );


  // pausa();

}


main();
