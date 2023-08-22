import { v4 as uuidv4 } from 'uuid';

class Task {
  id = '';
  desc = '';
  completadoEn = null;

  constructor(desc) {
    this.id = uuidv4();
    this.desc = desc;
    this.completadoEn = null;
  }
}

export default Task;
