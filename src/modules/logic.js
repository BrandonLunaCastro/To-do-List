import { loadStorage } from "./storage.js";

const _storage = loadStorage();
export default class Task {
  #title;
  #dueDate;
  #description;
  #priority;
  #project;
  static count = !_storage || _storage.length === 0 ? 0 : lastIndex(_storage);

  constructor(title, dueDate, description, priority, project) {
    this.#title = title;
    this.#dueDate = dueDate;
    this.#description = description;
    this.#priority = priority;
    this.#project = project;
    this.id = ++Task.count;
  }
  get getData() {
    return {
      title: this.#title,
      dueDate: this.#dueDate,
      description: this.#description,
      priority: this.#priority,
      project: this.#project,
      id: this.id,
    };
  }
}
function lastIndex(arr) {
  return arr.at(-1).id;
}

const findElement = (element) => {
  const actualTask = element.closest(".task"),
    idActual = actualTask.dataset.id,
    actualStorage = loadStorage();

  const dataInfo = actualStorage.filter((el) => idActual == el.id);

  return dataInfo;
};

/* const sameObject = (obj,newObj) => {
  console.log("old obj id")
  console.log(obj.id)
  console.log("new object id")
  console.log(newObj.id)
  return  obj.id == newObj.id ? true : false ;
} */


export { findElement };
