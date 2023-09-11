import "./styles.css"
import { clickBtnModal, clickBtnTask, showProperties,clickEdit, clickBtnDelete } from "./modules/dom.js";
import { loadTask } from "./modules/storage.js";


const initApp = () => {
    clickBtnTask();
    clickBtnModal();
    showProperties();
    loadTask();
   
}
window.addEventListener("DOMContentLoaded",initApp)