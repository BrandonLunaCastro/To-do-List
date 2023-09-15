import "./styles.css"
import { clickBtnModal, clickBtnTask, showProperties,clickEdit, clickBtnDelete } from "./modules/dom.js";
import { loadProject, loadTask } from "./modules/storage.js";



const initApp = () => {
    clickBtnTask();
    clickBtnModal();
    loadTask();
    loadProject();
 
}
window.addEventListener("DOMContentLoaded",initApp)