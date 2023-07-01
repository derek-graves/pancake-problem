import { renderStackAndHistory } from "./render";

const clickHandlerHistory = (event, manager, stackObject) => {
  const selectedHistoryCard = event.target.dataset.historyIndex;

  // only run when history card is clicked
  if (!selectedHistoryCard) return;

  manager.executeCommand("REVERT", [selectedHistoryCard]);
  renderStackAndHistory(stackObject);
};

const addHistoryListener = (manager, stackObject) => {
  const historyDiv = document.getElementById("history");
  historyDiv.addEventListener("click", (event) =>
    clickHandlerHistory(event, manager, stackObject)
  );
};

export default addHistoryListener;
