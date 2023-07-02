import { renderStackAndHistory } from "./render";

const addChangeQuantityListeners = (manager, stackObject) => {
  const addButton = document.getElementById("change-quantity-add");
  addButton.addEventListener("click", () => {
    manager.executeCommand("ADD");
    renderStackAndHistory(stackObject);
  });

  const removeButton = document.getElementById("change-quantity-remove");
  removeButton.addEventListener("click", () => {
    manager.executeCommand("REMOVE");
    renderStackAndHistory(stackObject);
  });
};

export default addChangeQuantityListeners;
