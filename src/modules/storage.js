import { clickBtnDelete, clickEdit, insertTask } from "./dom.js";

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
//fix a corregir
const saveNewData = (obj) => {
  let storage = loadStorage();
  let indexObj;
  storage.forEach((el, index) => {
    if (el.id == obj.id) {
      indexObj = index;
    }
  }); 
 /*  storage.map((el,i) => {
    indexObj = el.id === obj.id ? i : false  
  }) */
  console.log(indexObj)
  storage[indexObj] = obj;

  saveLocalStorage(storage, true);
};
//funcion que recibe el objeto con la data antigua y la newData reemplaza la anterior
const editItem = (obj, newData) => {
  obj.title = newData.title;
  obj.dueDate = newData.dueDate;
  obj.description = newData.description;
  obj.priority = newData.priority;
  obj.project = newData.project
  saveNewData(obj);
};

const loadProject = () => {
  return JSON.parse(localStorage.getItem("totalProjects"));
};

const saveProject = (project) => {
    const totalProjects = loadProject(); 
    if(!totalProjects){
        localStorage.setItem("totalProjects",JSON.stringify([project]))
    }
    if(totalProjects){
        totalProjects.push(project);
        localStorage.setItem("totalProjects",JSON.stringify(totalProjects))
    }

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
};
