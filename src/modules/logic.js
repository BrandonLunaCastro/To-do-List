import { loadStorage } from "./storage.js"

const _storage = loadStorage()

export default class Task {
   #title
   #dueDate
   #description
   #priority
   static count = !_storage ? 0 : lastIndex(_storage)

    constructor(title,dueDate,description,priority){
        this.#title = title
        this.#dueDate = dueDate
        this.#description = description
        this.#priority = priority
        this.id = ++Task.count
    }
    get getData(){
        return {title:this.#title,dueDate:this.#dueDate,description:this.#description,priority:this.#priority,id:this.id}
    }
 
}

function lastIndex(arr){
  return arr.at(-1).id
}

const findElement = (element) => {
    const actualTask = element.closest(".task"),
      idActual = actualTask.dataset.id;
      const dataInfo = _storage.filter((el) => idActual == el.id);
      return dataInfo
}


export {findElement}