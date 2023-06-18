import { renderStackAndHistory } from "./render";

const clickHandlerHistory = (event, stackObject) => {
  const selectedHistoryCard = event.target.dataset.historyIndex;

  // only run when history card is clicked
  if (!selectedHistoryCard) return;

  stackObject.revert(selectedHistoryCard);
  renderStackAndHistory(stackObject);
};

const addHistoryListener = (stackObject) => {
  const historyDiv = document.getElementById("history");
  historyDiv.addEventListener("click", (event) =>
    clickHandlerHistory(event, stackObject)
  );
};

export default addHistoryListener;
