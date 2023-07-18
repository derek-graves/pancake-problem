import { loadTop, loadMiddle } from "./load-common-elements";
import { Stack } from "./stack";
import PancakeStackInvoker from "./stack-invoker";
import { renderStackAndHistory } from "./render";
import addViewListeners from "./view-controls";
import addHistoryListener from "./history-events";
import { addFlipListeners } from "./stack-events";
import addChangeStateListeners from "./change-state-controls";

const loadPuzzle = () => {
  // load and style all content other than the stack itself
  const allContent = document.getElementById("all-content");
  const top = loadTop();
  allContent.appendChild(top);
  const middle = loadMiddle(false);
  allContent.appendChild(middle);

  // create stack and manager
  const defaultOrder = [6, 5, 3, 2, 4, 1];
  const stack = new Stack(defaultOrder);
  const PancakeStackManager = new PancakeStackInvoker(stack);

  // add stack listners to stack and history listener to history
  addFlipListeners(PancakeStackManager, stack);
  addHistoryListener(PancakeStackManager, stack);

  // add controls listeners
  addViewListeners(stack);
  addChangeStateListeners(PancakeStackManager, stack);

  // render default stack and history on page load
  renderStackAndHistory(stack);
};

export default loadPuzzle;
