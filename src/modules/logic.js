import { loadStorage } from "./storage.js"

export default class Task {
   #title
   #dueDate
   #description
   #priority
   static count = 1

    constructor(title,dueDate,description,priority){
        this.#title = title
        this.#dueDate = dueDate
        this.#description = description
        this.#priority = priority
        this.id = Task.count++
    }
    get getData(){
        return {title:this.#title,dueDate:this.#dueDate,description:this.#description,priority:this.#priority,id:this.id}
    }
  /*   set setTitle(title){
        this.#title = title
    }
    set setDueDate(dueDate){
        this.#dueDate = dueDate
    }
    set setDescription(description){
        this.#description = description
    }
    set setPriority(priority){
        this.#priority = priority
    } */
}


console.log(loadStorage())