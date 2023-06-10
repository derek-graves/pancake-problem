import { renderStack, renderHistory } from "./render";

const clickHandlerStack = (pancake, stackObject) => {
  const selectedPancake = pancake.target.dataset.stackIndex;

  // only run when pancake is clicked
  if (!selectedPancake) return;

  stackObject.flip(selectedPancake);

  renderStack(stackObject);
  renderHistory(stackObject);
};

const clickHandlerHistory = (historyCard, stackObject) => {
  const selectedHistoryCard = historyCard.target.dataset.historyIndex;

  // only run when history card is clicked
  if (!selectedHistoryCard) return;

  stackObject.revert(selectedHistoryCard);
  renderStack(stackObject);
  renderHistory(stackObject);
};

export { clickHandlerStack, clickHandlerHistory };
