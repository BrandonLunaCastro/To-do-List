import { clickBtnDelete, clickEdit, insertTask} from "./dom.js";

function loadStorage(){
    const arrList = JSON.parse(localStorage.getItem("totalTask"));
    console.log(localStorage.key(1))
    return arrList;
}

function saveLocalStorage(data){
    const lists = loadStorage()   
    if(!lists){
        localStorage.setItem("totalTask",JSON.stringify([data]))
    }
    if(lists){
        lists.push(data)
        localStorage.setItem("totalTask",JSON.stringify(lists))
    }
}

function removeItem(){


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

export {saveLocalStorage,loadStorage,loadTask,removeItem}
