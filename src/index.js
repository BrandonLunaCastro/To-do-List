import "./styles.css"
import { clickBtnAdd, clickBtnTask, showProperties } from "./modules/dom.js";


const initApp = () => {
    clickBtnTask();
    clickBtnAdd();
    showProperties();
}
window.addEventListener("DOMContentLoaded",initApp)