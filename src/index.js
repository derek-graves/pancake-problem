import "./style.css";
import { Stack, SandboxStack } from "./stack";
import { renderStack, renderHistory } from "./render";
import { clickHandlerStack, clickHandlerHistory } from "./stack-handlers";
import changeView from "./view-controls";

// create default stack
const defaultOrder = [6, 5, 3, 2, 4, 1];
const stack = new Stack(defaultOrder);

// add stack-handlers to stack and history elements
const stackDiv = document.getElementById("stack");
stackDiv.addEventListener("click", (event) => clickHandlerStack(event, stack));

const historyDiv = document.getElementById("history");
historyDiv.addEventListener("click", (event) =>
  clickHandlerHistory(event, stack)
);

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

// render default stack and history on page load
renderStack(stack);
renderHistory(stack);
