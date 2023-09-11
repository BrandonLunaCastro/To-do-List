import { loadStorage } from "./storage.js"

const storage = loadStorage()

export default class Task {
   #title
   #dueDate
   #description
   #priority
   static count = !storage ? 0 : lastIndex(storage)

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