import "./styles.css";
import "./hamburgers.css"
import {
  clickBtnModal,
  clickBtnTask,
  openWindow
} from "./modules/dom.js";
import { loadProject, loadTask } from "./modules/storage.js";

const initApp = () => {
  openWindow();
  clickBtnTask();
  clickBtnModal();
  loadTask();
  loadProject();
};
window.addEventListener("DOMContentLoaded", initApp);
