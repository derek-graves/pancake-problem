const renderStack = (stack) => {
  const stackDOM = document.getElementById("stack");
  stackDOM.innerHTML = "";

  const stackArray = stack.order;

  // Traditional for loop used because each pancake's index isn't
  // necessarily the same as its value
  for (let i = 0; i < stackArray.length; i++) {
    const newPancake = document.createElement("div");
    newPancake.classList.add("pancake");

    const widthPercentage = (stackArray[i] / stackArray.length) * 100;
    newPancake.style.width = `${widthPercentage}%`;

    // set data attributes to connect stack and corresponding DOM elements
    newPancake.dataset.stackIndex = i;
    newPancake.dataset.value = stackArray[i];

    stackDOM.append(newPancake);
  }
};

const renderHistory = (stack) => {
  const historyDOM = document.getElementById("history");
  historyDOM.innerHTML = "";

  const historyArray = stack.history;
  // Traditional for loop used because each card's history-index data
  // attribute comes from the index of the snapsnot associated with
  // the card.
  for (let i = 0; i < historyArray.length; i++) {
    const newHistoryCard = document.createElement("div");
    newHistoryCard.classList.add("history-card");

    newHistoryCard.dataset.historyIndex = i;

    const currentHistoryStack = historyArray[i];
    currentHistoryStack.forEach((pancake) => {
      const newHistoryPancake = document.createElement("div");
      newHistoryPancake.classList.add("card-pancake");

      const widthPercentage = (pancake / currentHistoryStack.length) * 100;
      newHistoryPancake.style.width = `${widthPercentage}%`;

      newHistoryCard.append(newHistoryPancake);
    });

    historyDOM.append(newHistoryCard);
  }
};

export { renderStack, renderHistory };
