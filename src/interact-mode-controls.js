import { renderStackAndHistory } from "./render";

function _getOtherSiblings(element, parent) {
  const children = [...parent.children];
  return children.filter((child) => child !== element);
}

const _changeInteractMode = (event) => {
  const selectedView = event.currentTarget;

  // toggle enabled class on
  selectedView.classList.toggle("single-control-enabled", true);

  // toggle enabled class off for other interact-mode elements
  const siblings = _getOtherSiblings(selectedView, selectedView.parentNode);
  siblings.forEach((sibling) => {
    sibling.classList.toggle("single-control-enabled", false);
  });
};

const addInteractModeListeners = (stackObject) => {
  const interactModes = [...document.getElementById("interact-mode").children];
  interactModes.forEach((mode) => {
    mode.addEventListener("click", (event) => {
      _changeInteractMode(event);
      renderStackAndHistory(stackObject);
    });
  });
};

export default addInteractModeListeners;
