import { SandboxStack } from "./stack";
import PancakeStackInvoker from "./stack-invoker";

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

const _loadMiddle = (stackObject) => {
  const middleContainer = document.createElement("div");
  middleContainer.classList.add("middle");

  return middleContainer;
};

const loadSandbox = () => {
  const allContent = document.getElementById("all-content");

  // create two main containers
  const top = _loadTop();

  const middle = document.createElement("div");
  middle.classList.add("middle");

  allContent.appendChild(top);
};

export default loadSandbox;
