import { SandboxStack } from "./stack";
import PancakeStackInvoker from "./stack-invoker";
import { renderStackAndHistory } from "./render";
import addViewListeners from "./view-controls";
import addInteractModeListeners from "./interact-mode-controls";
import addHistoryListener from "./history-events";
import { addFlipListeners, addDragListeners } from "./stack-events";
import addChangeStateListeners from "./change-state-controls";
import addChangeQuantityListeners from "./change-quantity-controls";

const _loadTop = () => {
  const topContainer = document.createElement("div");
  topContainer.classList.add("top");

  // create and add content to top
  const header = document.createElement("div");
  header.classList.add("header");

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "flipjack.";
  header.appendChild(logo);

  const headerButtons = ["home", "school", "extension", "joystick"];
  headerButtons.forEach((element) => {
    const newButton = document.createElement("button");
    newButton.classList.add("header-button");
    newButton.id = element;
    const symbol = document.createElement("div");
    symbol.classList.add("header-icon", "material-symbols-rounded");
    symbol.innerText = element;
    newButton.appendChild(symbol);
    header.appendChild(newButton);
  });

  topContainer.appendChild(header);
  return topContainer;
};

const _loadControls = (isSandbox) => {
  const controlsData = [];

  const view = {
    view: { both: "pin", pancakes: "crop_16_9", numbers: "tag" },
  };
  controlsData.push(view);

  if (isSandbox) {
    const interactMode = {
      "interact-mode": { flip: "360", drag: "drag_indicator" },
    };
    controlsData.push(interactMode);

    const changeQuantity = {
      "change-quantity": { add: "add", remove: "remove" },
    };
    controlsData.push(changeQuantity);
  }

  const changeState = {
    "change-state": { undo: "undo", redo: "redo", reset: "refresh" },
  };
  controlsData.push(changeState);

  const controlsDiv = document.createElement("div");
  controlsDiv.classList.add("controls");

  controlsData.forEach((element) => {
    const groupName = Object.entries(element)[0][0];
    const group = Object.entries(element)[0][1];
    const groupPairs = Object.entries(group);

    const groupDiv = document.createElement("div");
    groupDiv.classList.add("control-group");
    groupDiv.id = groupName;

    groupPairs.forEach((pair) => {
      const button = document.createElement("button");
      button.classList.add("single-control");
      button.id = `${groupName}-${pair[0]}`;
      const enabled =
        button.id === "view-both" || button.id === "interact-mode-flip";
      if (enabled) {
        button.classList.add("single-control-enabled");
      }

      const symbol = document.createElement("div");
      symbol.classList.add("control-icon", "material-symbols-rounded");
      symbol.innerText = pair[1];
      button.appendChild(symbol);

      const label = document.createElement("div");
      label.classList.add("control-text");
      label.innerText = pair[0];
      button.appendChild(label);

      groupDiv.appendChild(button);
    });

    controlsDiv.appendChild(groupDiv);
  });

  return controlsDiv;
};

const _loadMiddle = () => {
  const middleContainer = document.createElement("div");
  middleContainer.classList.add("middle");

  // load controls
  const controlsContainer = _loadControls(true);
  middleContainer.appendChild(controlsContainer);

  const stackContainer = document.createElement("div");
  stackContainer.id = "stack-container";
  const stack = document.createElement("div");
  stack.id = "stack";
  stackContainer.appendChild(stack);
  middleContainer.appendChild(stackContainer);

  const historyContainer = document.createElement("div");
  historyContainer.id = "history-container";
  const history = document.createElement("div");
  history.id = "history";
  historyContainer.appendChild(history);
  middleContainer.appendChild(historyContainer);

  return middleContainer;
};

const loadSandbox = () => {
  // load and style all content other than the stack itself
  const allContent = document.getElementById("all-content");
  const top = _loadTop();
  allContent.appendChild(top);
  const middle = _loadMiddle();
  allContent.appendChild(middle);

  // create stack and manager
  const defaultOrder = [6, 5, 3, 2, 4, 1];
  const stack = new SandboxStack(defaultOrder);
  const PancakeStackManager = new PancakeStackInvoker(stack);

  // add stack listners to stack and history listener to history
  addFlipListeners(PancakeStackManager, stack);
  addDragListeners(PancakeStackManager, stack);
  addHistoryListener(PancakeStackManager, stack);

  // add controls listeners
  addViewListeners(stack);
  addInteractModeListeners(stack);
  addChangeQuantityListeners(PancakeStackManager, stack);
  addChangeStateListeners(PancakeStackManager, stack);

  // render default stack and history on page load
  renderStackAndHistory(stack);
};

export default loadSandbox;
