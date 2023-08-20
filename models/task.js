import { v4 as uuidv4 } from 'uuid';

class Task {
  id = '';
  desc = '';
  completedIn = null;

  constructor(desc) {
    this.id = uudiv4();
    this.desc = desc;
    this.completedIn = null;
  }
}

module.exports = Task;
