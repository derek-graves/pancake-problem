import "./style.css";
import { Stack, SandboxStack } from "./stack";
import { renderStack, renderHistory } from "./render";
import { clickHandlerStack, clickHandlerHistory } from "./stack-handlers";
import changeInteractMode from "./interact-controls";
import addViewListeners from "./view-controls";

const defaultOrder = [6, 5, 3, 2, 4, 1];
const stack = new Stack(defaultOrder);
let dragModeEnabled = false;

// add stack-handlers to stack and history elements
const stackDiv = document.getElementById("stack");
stackDiv.addEventListener("click", (event) => clickHandlerStack(event, stack));

const historyDiv = document.getElementById("history");
historyDiv.addEventListener("click", (event) =>
  clickHandlerHistory(event, stack)
);

addViewListeners(stack);

/* 
// add event-handlers to view elements
const viewPancakes = document.getElementById("view-pancakes");
viewPancakes.addEventListener("click", (event) => {
  changeView(event);
  renderStack(stack);
  renderHistory(stack);
});

const viewNumbers = document.getElementById("view-numbers");
viewNumbers.addEventListener("click", (event) => {
  changeView(event);
  renderStack(stack);
  renderHistory(stack);
});

const viewBoth = document.getElementById("view-both");
viewBoth.addEventListener("click", (event) => {
  changeView(event);
  renderStack(stack);
  renderHistory(stack);
});
*/

// add event handlers to interact elements
const interactModeFlip = document.getElementById("interact-mode-flip");
interactModeFlip.addEventListener("click", (event) => {
  changeInteractMode(event);
});

const interactModeDrag = document.getElementById("interact-mode-drag");
interactModeDrag.addEventListener("click", (event) => {
  changeInteractMode(event);
});

// render default stack and history on page load
renderStack(stack);
renderHistory(stack);

const dragStart = (event) => {
  const target = event.target;
  if (target && target.classList.contains("pancake")) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text/plain", target.dataset.stackIndex);

    target.style.opacity = 0.1;
  }
};

const dragEnd = (event) => {
  if (event.target && event.target.classList.contains("pancake")) {
    event.target.style.opacity = "";

    const pancakes = [...document.getElementById("stack").children];
    pancakes.forEach((pancake) => (pancake.style.transform = ""));
  }
};

const dragOver = (event) => {
  event.preventDefault();
};

const drop = (event) => {
  event.preventDefault();
  // validate target
  if (!event.target.dataset.stackIndex) {
    return;
  }
  const dropTarget = event.target;
  const draggedIndex = parseInt(event.dataTransfer.getData("text"));
  const droppedIndex = parseInt(dropTarget.dataset.stackIndex);

  // prevent self-drops
  if (droppedIndex !== draggedIndex) {
    const stackDiv = document.getElementById("stack");
    const clone = dropTarget.cloneNode(true);
    const dragTarget = stackDiv.childNodes[draggedIndex];
    stackDiv.replaceChild(dragTarget, dropTarget);
    dragTarget.after(clone);
  }
  stack.movePancake(draggedIndex, droppedIndex);
  renderStack(stack);
  renderHistory(stack);
};

const allPancakes = [...stackDiv.children];
allPancakes.forEach((pancake) => pancake.setAttribute("draggable", true));

stackDiv.addEventListener("dragstart", dragStart);
stackDiv.addEventListener("dragend", dragEnd);
stackDiv.addEventListener("dragover", dragOver);
stackDiv.addEventListener("drop", drop);

/* Foundation for dragover transitions

  const overIndex = document.elementFromPoint(event.clientX, event.clientY)
    .dataset.stackIndex;
  if (overIndex) {
    const pancakes = [...document.getElementById("stack").children];
    const moveUp = pancakes.filter(
      (pancake) => pancake.dataset.stackIndex <= overIndex
    );
    const moveDown = pancakes.filter(
      (pancake) => pancake.dataset.stackIndex >= overIndex
    );
    const height = pancakes[0].offsetHeight;
    moveUp.forEach(
      (element) =>
        (element.style.transform = `translateY(-${height / 2 + 4}px)`)
    );
    moveDown.forEach(
      (element) => (element.style.transform = `translateY(${height / 2 + 4}px)`)
    );
  }
  */

const fullStack = (function () {
  const init = {
    stack: new Stack(defaultOrder),
    interactMode: "flip",
  };
  return Object.seal(init);
})();
