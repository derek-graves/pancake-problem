import "./style.css";
import { Stack, SandboxStack } from "./stack";
import { renderStack, renderHistory } from "./render";

// create default stack
const defaultOrder = [6, 5, 3, 2, 4, 1];
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

const clickHandlerHistory = (historyCard) => {
  const selectedHistoryCard = historyCard.target.dataset.historyIndex;

  // only run when history card is clicked
  if (!selectedHistoryCard) return;

  stack.revert(selectedHistoryCard);
  renderStack(stack);
  renderHistory(stack);
};
const historyDiv = document.getElementById("history");
historyDiv.addEventListener("click", clickHandlerHistory);

// render default stack and history on page load
renderStack(stack);
renderHistory(stack);
