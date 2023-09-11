import Task from "./logic.js";
import { saveLocalStorage } from "./storage.js";

//function that activates modal window
const openModal = (e) => {
  if(e.currentTarget.matches("#addTask"))document.querySelector(".modal").showModal();
  if(e.currentTarget.matches(".edit")){
    document.querySelector(".edit__modal").showModal();
    loadModalFields()
    
  }
};
function clickBtnTask() {
  const btnAddTask = document.getElementById("addTask");
  btnAddTask.addEventListener("click", openModal);
}

//this function getting form values
const submitTask = (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  createTask(data.title, data.dueDate, data.description, data.priority);
  
  document.querySelector(".modal").close();
  e.currentTarget.reset();
  
};

function clickBtnModal() {
  document.querySelector(".form").addEventListener("submit", submitTask);
  document.querySelector(".form__edit").addEventListener("submit",editTask)
}

//this function generate instance of class task
function createTask(title, dueDate, description, priority){
  const newTask = new Task(title, dueDate, description, priority);
  const dataInfo = newTask.getData;

  insertTask(dataInfo);
  saveLocalStorage(dataInfo);
  clickEdit()
}
//this function insert task to DOM
function insertTask(data) {
  let { title, dueDate, description, priority ,id } = data;
  const sectionTasks = document.querySelector(".tasks"),
    figure = document.createElement("figure"),
    fragment = document.createDocumentFragment()

   figure.classList.add("task")
   figure.setAttribute("data-id",id)
   figure.innerHTML = `  
        <div class="main__task">
          <div>
            <input type="checkbox" name="checkbox" id="checkbox">
            <span>${title}</span>
          </div>
          <div>
            <i class="edit fa-regular fa-pen-to-square"></i>
            <i class="delete fa-solid fa-trash-can"></i>
          </div>
        </div>
        <div class="more__info display__none">
          <span><b>Title:</b>${title}</span>
          <span><b>Due Date:</b>${dueDate}</span>
          <span><b>Description:</b>${description}</span>
          <span><b>Priority:</b>${priority}</span>
        </div>
      </div>
  `;

  fragment.appendChild(figure)
  sectionTasks.appendChild(fragment)
  showProperties()
}


const showMore = (e) => {
    if(e.target.matches(".edit") || e.target.matches("#checkbox") || e.target.matches(".delete"))return
    const divParent = e.currentTarget;
    divParent.nextElementSibling.classList.toggle("display__none");
}

function showProperties(){
   const infoTasks = document.querySelectorAll(".main__task")
   console.log(infoTasks)
    infoTasks.forEach((task)=>{
        task.addEventListener("click",showMore)
    })
}

function clickEdit(){
    const editIcons = document.querySelectorAll(".edit");
    editIcons.forEach((icon)=>{
      icon.addEventListener('click',openModal)
    });
}
const loadModalFields = () => {
  const editForm = document.querySelector(".form__edit");
  const editFormData = new FormData(editForm)
 editFormData.set("title","title")
 console.log(editFormData.get("title"))

}


const editTask = (e) => {

}


export {clickBtnTask, clickBtnModal, showProperties, clickEdit};
