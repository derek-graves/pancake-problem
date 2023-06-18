import { renderStackAndHistory } from "./render";

const flipEvent = (event, stackObject) => {
  const selectedPancake = event.target.dataset.stackIndex;
  const flipModeEanbled = document
    .getElementById("interact-mode-flip")
    .classList.contains("single-control-enabled");

  // only run when pancake is clicked and flip mode enabled
  if (selectedPancake && flipModeEanbled) {
    stackObject.flip(selectedPancake);
    renderStackAndHistory(stackObject);
  }
};

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
  }
};

const dragOver = (event) => {
  event.preventDefault();
};

const drop = (event, stackObject) => {
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
  stackObject.movePancake(draggedIndex, droppedIndex);
  renderStackAndHistory(stackObject);
};

const addFlipListeners = (stackObject) => {
  const stackDiv = document.getElementById("stack");
  stackDiv.addEventListener("click", (event) => flipEvent(event, stackObject));
};

const addDragListeners = (stackObject) => {
  const stackDiv = document.getElementById("stack");
  stackDiv.addEventListener("dragstart", dragStart);
  stackDiv.addEventListener("dragend", dragEnd);
  stackDiv.addEventListener("dragover", dragOver);
  stackDiv.addEventListener("drop", (event) => {
    drop(event, stackObject);
  });
};

export { addFlipListeners, addDragListeners };

/* Foundation for dragover transitions, if needed

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
