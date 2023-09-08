import Task from "./logic.js";

//function that activates modal window
const openModal = (e) => {
  const dialog = document.querySelector(".modal");
  dialog.showModal();
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
function clickBtnAdd() {
  document.querySelector(".form").addEventListener("submit", submitTask);
}

//this function generate instance of class task
function createTask(title, dueDate, description, priority) {
  const newTask = new Task(title, dueDate, description, priority);
  const dataInfo = newTask.getData;
  insertTask(dataInfo);
}
//this function insert task to DOM
function insertTask(data) {
  let { title, dueDate, description, priority } = data;
  const sectionTasks = document.querySelector(".tasks");
  const figure = document.createElement("figure"),
    div = document.createElement("div"),
    div2 = document.createElement("div"),
    div3 = document.createElement("div"),
    span1 = document.createElement("span"),
    span2 = document.createElement("span"),
    span3 = document.createElement("span"),
    span4 = document.createElement("span"),
    fragment = document.createDocumentFragment(),
    i = document.createElement("i"),
    inputCheckbox = document.createElement("input"),
    mainTitle = document.createElement("span");

  inputCheckbox.type = "checkbox";
  inputCheckbox.name = "checkbox";
  inputCheckbox.id = "checkbox";

  i.className = "edit fa-regular fa-pen-to-square";
  mainTitle.innerText = title
  span1.innerHTML = `<b>Title:</b> ${title} `
  span2.innerHTML = `<b>Due date:</b> ${dueDate}`
  span3.innerHTML = `<b>Description:</b> ${description}`
  span4.innerHTML = `<b>Priority:</b> ${priority}`

  figure.appendChild(div);
  figure.appendChild(div2);
  figure.classList.add("task")

  div3.appendChild(inputCheckbox);
  div3.appendChild(mainTitle);

  div.appendChild(div3);
  div.appendChild(i);
  div.classList.add("main__task");

  div2.appendChild(span1);
  div2.appendChild(span2);
  div2.appendChild(span3);
  div2.appendChild(span4);
  div2.classList.add("more__info")
  div2.classList.add("display__none")


  fragment.appendChild(figure);
  sectionTasks.appendChild(fragment);

  showProperties()
}


const showMore = (e) => {
    if(e.target.matches(".edit") || e.target.matches("#checkbox"))return
    const divParent = e.currentTarget
   
    divParent.nextElementSibling.classList.toggle("display__none")

}

function showProperties(){
   const infoTasks = document.querySelectorAll(".main__task")
   console.log(infoTasks)
    infoTasks.forEach((task)=>{
        task.addEventListener("click",showMore)
    })
}

export { clickBtnTask, clickBtnAdd, showProperties};
