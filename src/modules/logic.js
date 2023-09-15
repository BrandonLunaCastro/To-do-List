import { insertTask } from "./dom.js";
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

const showTasks = (e) => {
  const storage = loadStorage(),
    projectClicked = e.target.dataset.value,
    sectionTasks = document.querySelector(".tasks");

  sectionTasks.innerHTML = "";

  if (projectClicked === "Home") {
    for (let task of storage) {
      insertTask(task);
    }
    return;
  }

  const filterTask = storage.filter((task) => task.project === projectClicked);

  if (filterTask.length == 0) {
    return (sectionTasks.innerHTML = `
      <div class='error'>No se encuentran tareas asociadas a este proyecto</div>
    `);
  }
  if (filterTask.length > 1) {
    for (let task of filterTask) {
      insertTask(task);
    }
  }
  if (filterTask.length < 2) {
    insertTask(filterTask[0]);
  }
};

const renderTask = () => {
  const totalProjects = document.querySelectorAll("[data-value]");
  totalProjects.forEach((project) => {
    project.addEventListener("click", showTasks);
  });
};

export { findElement, renderTask };
