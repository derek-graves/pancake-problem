import "./style.css";
import { Stack, SandboxStack } from "./stack";
import { renderStackAndHistory } from "./render";
import addViewListeners from "./view-controls";
import addInteractModeListeners from "./interact-mode-controls";
import addHistoryListener from "./history-events";
import { addFlipListeners, addDragListeners } from "./stack-events";

const defaultOrder = [6, 5, 3, 2, 4, 1];
const stack = new SandboxStack(defaultOrder);

// add stack listners to stack and history elements to history
addFlipListeners(stack);
addDragListeners(stack);
addHistoryListener(stack);

// add controls listeners
addViewListeners(stack);
addInteractModeListeners(stack);

// render default stack and history on page load
renderStackAndHistory(stack);

const fullStack = (function () {
  const init = {
    stack: new Stack(defaultOrder),
  };
  return Object.seal(init);
})();
