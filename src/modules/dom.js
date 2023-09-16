
import Task, { findElement, renderTask } from "./logic.js";
import {
  saveLocalStorage,
  deleteItem,
  editItem,
  saveProject,
  deleteStorageProject,
} from "./storage.js";
import { format } from 'date-fns'


const openWindow = () => {
  const btnWindow = document.querySelector(".hamburger")

  btnWindow.addEventListener("click",e => {
    e.currentTarget.classList.toggle("is-active")
    document.querySelector(".window__projects").classList.toggle("open")

  })

}
/* Code with Task */
//function that activates modal window
const openModal = (e) => {
  if (e.currentTarget.matches("#addTask"))
    document.querySelector(".modal").showModal();
  if (e.currentTarget.matches(".edit")) {
    document.querySelector(".edit__modal").showModal();
    dataTransfer(e.currentTarget);
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

  createTask(
    data.title,
    data.dueDate,
    data.description,
    data.priority,
    data.project
  );

  document.querySelector(".modal").close();
  e.currentTarget.reset();
};

function clickBtnModal() {
  document.querySelector(".form").addEventListener("submit", submitTask);
}

const deleteTask = (e) => {
  //delete task inner DOM
  let taskDelete = e.target.closest(".task"),
    id = taskDelete.dataset.id;

  taskDelete.remove();
  deleteItem(id);
};
// When target is "icon trash" , trigger this function
function clickBtnDelete() {
  const btnDeletes = document.querySelectorAll(".delete");
  btnDeletes.forEach((btn) => {
    btn.addEventListener("click", deleteTask);
  });
}

//this function generate instance of class task
function createTask(title, dueDate, description, priority, project) {
  const newTask = new Task(title, dueDate, description, priority, project);
  const dataInfo = newTask.getData;
  console.log(dataInfo);
  insertTask(dataInfo);
  saveLocalStorage(dataInfo);
}
//this function insert task to DOM
function insertTask(data, flag = false) {
  let { title, dueDate, description, priority, id } = data;
  const sectionTasks = document.querySelector(".tasks"),
    figure = document.createElement("figure"),
    fragment = document.createDocumentFragment();
  console.log(format(new Date(dueDate),' MMM do yyyy'))
 dueDate = format(new Date(dueDate),' MMM do yyyy')

  figure.classList.add("task");
  figure.setAttribute("data-id", id);
  figure.innerHTML = `  
        <div class="main__task">
          <div>
            <input type="checkbox" name="checkbox" id="checkbox">
            <span class="main__title" >${title}</span>
          </div>
          <div>
            <i class="edit fa-regular fa-pen-to-square"></i>
            <i class="delete fa-solid fa-trash-can"></i>
          </div>
        </div>
        <div class="more__info display__none">
          <span class="info__title"><b>Title: </b>${title}</span>
          <span class="info__date"><b>Due Date: </b>${dueDate}</span>
          <span class="info__description"><b>Description: </b>${description}</span>
          <span class="info__priority"><b>Priority: </b>${priority}</span>
        </div>
      </div>
  `;

  if (flag === true) {
    return figure;
  }
  if (!flag) {
    fragment.appendChild(figure);
    sectionTasks.appendChild(fragment);
    showProperties();
    clickEdit();
    clickBtnDelete();
    detectCheckTask()
  }
}

const changeStatus = (e) => {
  const check = e.target 
  check.nextElementSibling.classList.toggle("checked")
} 

function detectCheckTask(){
  const allCheckbox = document.querySelectorAll("#checkbox")
  allCheckbox.forEach(check => check.addEventListener("input",changeStatus))
}

const showMore = (e) => {
  if (
    e.target.matches(".edit") ||
    e.target.matches("#checkbox") ||
    e.target.matches(".delete")
  )
    return;
  const divParent = e.currentTarget;
  divParent.nextElementSibling.classList.toggle("display__none");
};

function showProperties() {
  const infoTasks = document.querySelectorAll(".main__task");
  infoTasks.forEach((task) => {
    task.addEventListener("click", showMore);
  });
}

function clickEdit() {
  const editIcons = document.querySelectorAll(".edit");
  editIcons.forEach((icon) => {
    icon.addEventListener("click", openModal);
  });
}

const replaceTask = (task, element) => {
  task.replaceWith(insertTask(element, true));
  showProperties();
  clickEdit();
  clickBtnDelete();
  detectCheckTask()
};

const editTask = (form, element, task) => {
  let actualElement = findElement(element);
  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      console.log(actualElement);

      let editData = Object.fromEntries(new FormData(e.target));
      editData.id = task.dataset.id;
      console.log(editData);
      editItem(actualElement[0], editData);
      replaceTask(task, actualElement[0]);

      document.querySelector(".edit__modal").close();
    },
    { once: true }
  );
};

const loadModal = (form, element) => {
  let actualTask = findElement(element);
  const { title, dueDate, description, priority, project } = form;
  title.value = actualTask[0].title;
  dueDate.value = actualTask[0].dueDate;
  description.value = actualTask[0].description;
  priority.value = actualTask[0].priority;
  project.value = actualTask[0].project;
};
const dataTransfer = (element) => {
  const formEdit = document.querySelector(".form__edit"),
    actualTask = element.closest(".task");
  loadModal(formEdit.elements, element);
  editTask(formEdit, element, actualTask);
};

/* -----------------This part of code take care section projects----------------- */

const showOpt = (e) => {
  const btnAdd = e.currentTarget;
  btnAdd.classList.add("display__none");
  btnAdd.nextElementSibling.classList.remove("display__none");
};

document.querySelector(".add__project").addEventListener("click", showOpt);

const deleteProject = (e) => {
  const div = e.target.closest(".project"),
    optionsElement = document.querySelectorAll(
      `[data-option=${div.dataset.value}]`
    );

  div.remove();
  optionsElement.forEach((option) => option.remove());
  deleteStorageProject(div);
};

const clickMinus = () => {
  const minusICon = document.querySelectorAll(".minus");
  minusICon.forEach((icon) => icon.addEventListener("click", deleteProject));
};

const insertProject = (value) => {
  const div = document.createElement("div"),
    sectionProjects = document.querySelector(".projects"),
    selectProject = document.querySelector(".select__project"),
    selectEdit = document.getElementById("edit__select"),
    icon = document.createElement("i"),
    option = document.createElement("option");

  icon.className = "minus fa-solid fa-minus";
  option.innerText = value;
  option.setAttribute("value", value);
  option.setAttribute("data-option", value);
  selectProject.appendChild(option);

  const cloneOption = option.cloneNode(true);
  selectEdit.appendChild(cloneOption);

  div.innerText = value;
  div.classList.add("project");
  div.setAttribute("data-value", value);
  div.appendChild(icon);
  sectionProjects.appendChild(div);
};

const cancelAdd = (e) => {
  const element = e.target;
  element.parentElement.classList.add("display__none");
  document.querySelector(".add__project").classList.remove("display__none");
};

const addProject = (e) => {
  const element = e.target,
    input = document.getElementById("name"),
    sectionProjects = document.querySelector(".projects"),
    div = document.createElement("div"),
    selectProject = document.querySelector(".select__project"),
    selectEdit = document.getElementById("edit__select"),
    icon = document.createElement("i"),
    option = document.createElement("option");

  icon.className = "minus fa-solid fa-minus";

  option.innerText = input.value;
  option.setAttribute("value", input.value);
  option.setAttribute("data-option", input.value);
  selectProject.appendChild(option);

  //clone node and add option HTML element to correctly select
  const opt = option.cloneNode(true);
  selectEdit.appendChild(opt);
  //add project to section
  div.innerText = input.value;
  div.classList.add("project");
  div.setAttribute("data-value", input.value);
  div.appendChild(icon);
  sectionProjects.appendChild(div);
  saveProject(input.value);

  element.parentElement.classList.add("display__none");
  document.querySelector(".add__project").classList.remove("display__none");
  input.value = "";
  renderTask();
  clickMinus();
};

document
  .querySelector(".option__project")
  .addEventListener("click", (event) => {
    if (event.target.matches("#btn__add")) addProject(event);
    if (event.target.matches("#btn__cancel")) cancelAdd(event);
  });

export {
  clickBtnTask,
  clickBtnModal,
  clickBtnDelete,
  showProperties,
  clickEdit,
  insertTask,
  insertProject,
  clickMinus,
  openWindow
};
