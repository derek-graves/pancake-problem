import "./style.css";
import { Stack, SandboxStack } from "./stack";
import { renderStack, renderHistory } from "./render";

// create default stack
const defaultOrder = [3, 2, 4, 1];
const stack = new Stack(defaultOrder);

const clickHandlerStack = (pancake) => {
  const selectedPancake = pancake.target.dataset.stackIndex;

  // only run when pancake is clicked
  if (!selectedPancake) return;

  stack.flip(selectedPancake);

  renderStack(stack);
  renderHistory(stack);
};
const stackDiv = document.getElementById("stack");
stackDiv.addEventListener("click", clickHandlerStack);

// render default stack and history on page load
renderStack(stack);
renderHistory(stack);
