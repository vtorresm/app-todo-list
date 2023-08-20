import Task from './task';

class Tasks {
  _listed = {
    abc: 123,
  };

  get listArr() {
    const listed = [];
    Object.keys(this._listed).forEach((key) => {
      const task = this._listed[key];
      listed.push(task);
    });

    return listed;
  }

  constructor() {
    this._listed = {};
  }

  deleteTask(id = '') {
    if (this._listed[id]) {
      delete this._listed[id];
    }
  }

  loadingTasksFromArray(tasks = []) {
    tasks.forEach((task) => {
      this._listed[task.id] = task;
    });
  }

  creatingTask(desc = '') {
    const task = new Task(desc);
    this._listed[task.id] = task;
  }

  listedComplete() {
    console.log();
    this.listedArr.forEach((task, i) => {
      const idx = `${i + 1}`.green;
      const { desc, completedIn } = task;
      const state = completedIn ? 'Completada'.green : 'Pendiente'.red;

      console.log(`${idx} ${desc} :: ${state}`);
    });
  }

  listPendingCompleted(completed = true) {
    console.log();
    let counter = 0;
    this.listedArr.forEach((task) => {
      const { desc, completedIn } = task;
      const estado = completedIn ? 'Completada'.green : 'Pendiente'.red;
      if (completed) {
        //TODO: mostrar completed
        if (completedIn) {
          counter += 1;
          console.log(
            `${(counter + '.').green} ${desc} :: ${completedIn.green}`
          );
        }
      } else {
        //TODO: mostrar pendientes
        if (!completedIn) {
          counter += 1;
          console.log(`${(counter + '.').green} ${desc} :: ${state}`);
        }
      }
    });
  }

  togglecompleted(ids = []) {
    ids.forEach((id) => {
      const task = this._listed[id];
      if (!task.completedIn) {
        task.completedIn = new Date().toISOString();
      }
    });

    this.listedArr.forEach((task) => {
      if (!ids.includes(task.id)) {
        this._listed[task.id].completedIn = null;
      }
    });
  }
}

module.exports = Tasks;
