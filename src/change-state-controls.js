import { renderStackAndHistory } from "./render";

const addChangeStateListeners = (manager, stackObject) => {
  const undoButton = document.getElementById("change-state-undo");
  undoButton.addEventListener("click", () => {
    manager.undo();
    renderStackAndHistory(stackObject);
  });

  const redoButton = document.getElementById("change-state-redo");
  redoButton.addEventListener("click", () => {
    manager.redo();
    renderStackAndHistory(stackObject);
  });

  const resetButton = document.getElementById("change-state-reset");
  resetButton.addEventListener("click", () => {
    manager.executeCommand("RESET");
    renderStackAndHistory(stackObject);
  });
};

export default addChangeStateListeners;
