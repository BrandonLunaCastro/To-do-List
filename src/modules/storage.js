import { clickBtnDelete, clickEdit, clickMinus, insertProject, insertTask } from "./dom.js";
import { renderTask } from "./logic.js";

function loadStorage() {
  const arrList = JSON.parse(localStorage.getItem("totalTask"));
  return arrList;
}

function saveLocalStorage(data, flag = false) {
  const lists = loadStorage();
  if (!lists) {
    localStorage.setItem("totalTask", JSON.stringify([data]));
  }
  if (lists) {
    lists.push(data);
    localStorage.setItem("totalTask", JSON.stringify(lists));
  }
  if (lists && flag) {
    localStorage.removeItem("totalTask");
    localStorage.setItem("totalTask", JSON.stringify(data));
  }
}
//function take care of delete data Task on the localStorage
function deleteItem(id) {
  const actualStorage = loadStorage();
  let taskToRemove = actualStorage.filter((element) => !(element.id == id));
  saveLocalStorage(taskToRemove, true);
}
const saveNewData = (obj) => {
  let storage = loadStorage();
  let indexObj;
  storage.forEach((el, index) => {
    if (el.id == obj.id) {
      indexObj = index;
    }
  });
  storage[indexObj] = obj;
  saveLocalStorage(storage, true);
};
//funcion que recibe el objeto con la data antigua y la newData reemplaza la anterior
const editItem = (obj, newData) => {
  obj.title = newData.title;
  obj.dueDate = newData.dueDate;
  obj.description = newData.description;
  obj.priority = newData.priority;
  obj.project = newData.project;

  saveNewData(obj);
};

const loadStorageProject = () => {
  return JSON.parse(localStorage.getItem("totalProjects"));
};

const saveProject = (project, removed = false) => {
  const totalProjects = loadStorageProject();
  if (!totalProjects) {
    localStorage.setItem("totalProjects", JSON.stringify([project]));
  }
  if (totalProjects) {
    totalProjects.push(project);
    localStorage.setItem("totalProjects", JSON.stringify(totalProjects));
  }
  if(totalProjects && removed){
    localStorage.removeItem("totalProjects");
    localStorage.setItem("totalProjects",JSON.stringify(project))
  }

};

const deleteStorageProject = (element) => {
  const totalProjects = loadStorageProject(),
        elementRemoved = element.dataset.value,
        index = totalProjects.indexOf(elementRemoved) 
  //remove project to array
  totalProjects.splice(index,1);
  //save new array projects in local storage 
  saveProject(totalProjects,true);
}


const loadProject = () => {
  const projects = loadStorageProject();

  if (!projects) {
    saveProject("Home");
    insertProject("Home");
  }
  projects.forEach((project) => {
    insertProject(project);
  });

  renderTask();
  clickMinus();
};

const loadTask = () => {
  const dataAll = loadStorage();
  if (!dataAll) return;
  for (let task of dataAll) {
    insertTask(task);
  }
  clickEdit();
  clickBtnDelete();
};

export {
  saveLocalStorage,
  loadStorage,
  loadTask,
  deleteItem,
  editItem,
  saveProject,
  loadProject,
  deleteStorageProject
};
