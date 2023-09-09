import "./styles.css"
import { clickBtnModal, clickBtnTask, showProperties,clickEdit } from "./modules/dom.js";


const initApp = () => {
    clickBtnTask();
    clickBtnModal();
    showProperties();
    clickEdit();
}
window.addEventListener("DOMContentLoaded",initApp)