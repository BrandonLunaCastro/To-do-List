import { clickBtnDelete, clickEdit, insertTask} from "./dom.js";

function loadStorage(){
    const arrList = JSON.parse(localStorage.getItem("totalTask"));
    return arrList;
}

function saveLocalStorage(data,flag = false){
    const lists = loadStorage()   
    if(!lists){
        localStorage.setItem("totalTask",JSON.stringify([data]))
    }
    if(lists){
        lists.push(data)
        localStorage.setItem("totalTask",JSON.stringify(lists))
    }
    if(flag){
        localStorage.clear()
        localStorage.setItem("totalTask",JSON.stringify(data))
    }
}
//function take care of delete data Task on the localStorage
function removeItem(id){
 const actualStorage = loadStorage()
 let taskToRemove = actualStorage.filter((element) => !(element.id == id))
 saveLocalStorage(taskToRemove,true)
}

const saveNewData = (obj) => {
    const storage = loadStorage()
    let indexObj; 
    storage.forEach((el,index) => {
        if(el.id == obj.id){
            indexObj = index
        }
    });
    storage[indexObj] = obj;
    saveLocalStorage(storage,true);
}

const editItem = (obj,newData) => {
    obj.title = newData.title;
    obj.dueDate = newData.dueDate;
    obj.description = newData.description;
    obj.priority = newData.priority;

    saveNewData(obj);
}

const saveProject = () => {
    
    localStorage.setItem("totalProject",)
}



const loadTask = () => {
    const dataAll = loadStorage();
    if(!dataAll)return
    for(let task of dataAll){
        insertTask(task);
    }
    clickEdit();
    clickBtnDelete()
}

export {saveLocalStorage,loadStorage,loadTask,removeItem,editItem   }
