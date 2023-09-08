export default class Task {
   #title
   #dueDate
   #description
   #priority
    constructor(title,dueDate,description,priority){
        this.#title = title
        this.#dueDate = dueDate
        this.#description = description
        this.#priority = priority
    }
    get getData(){
        return {title:this.#title,dueDate:this.#dueDate,description:this.#description,priority:this.#priority}
    }
}