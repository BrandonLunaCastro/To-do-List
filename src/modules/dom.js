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
    p1 = document.createElement("p"),
    span1 = document.createElement("span"),
    span2 = document.createElement("span"),
    span3 = document.createElement("span"),
    fragment = document.createDocumentFragment(),
    i = document.createElement("i"),
    inputCheckbox = document.createElement("input");

  inputCheckbox.type = "checkbox";
  inputCheckbox.name = "checkbox";
  inputCheckbox.id = "checkbox"  

  i.className = "fa-regular fa-pen-to-square"


  p1.classList.add("title");
  p1.innerText = title;

  p2.classList.add("dueDate");
  p2.innerText = dueDate;

  p3.classList.add("description");
  p3.innerText = description;

  p4.classList.add("priority");
  p4.innerText = priority;  

  figure.appendChild(div)
  figure.appendChild(div2)

  div.appendChild(inputCheckbox)
  div.appendChild(p1)
  div.appendChild(i)

  div2.appendChild()
  div2.appendChild()

  fragment.appendChild(figure);
  sectionTasks.appendChild(fragment);
}

export { clickBtnTask, clickBtnAdd };
