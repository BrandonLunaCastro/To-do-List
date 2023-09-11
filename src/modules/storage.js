function loadStorage(){
    const arrList = JSON.parse(localStorage.getItem("totalTask"));
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

export {saveLocalStorage,loadStorage}
