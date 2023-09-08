import "./styles.css"
import { clickBtnAdd, clickBtnTask } from "./modules/dom.js";


const initApp = () => {
    clickBtnTask();
    clickBtnAdd();
}
window.addEventListener("DOMContentLoaded",initApp)