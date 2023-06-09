const updateHistory = (stack) => {
  const historyDOM = document.getElementById("history");

  // clear .history div
  historyDOM.innerHTML = "";

  // get history array from stack
  const historyArray = stack.history;

  // for each snapshot in history array:
  for (let i = 0; i < historyArray.length; i++) {
    // create card; add class(es) to card
    const newHistoryCard = document.createElement("div");
    newHistoryCard.classList.add("history-card");

    //  add data attribute to card
    newHistoryCard.dataset.historyIndex = i + 1;

    const currentHistoryStack = historyArray[i];
    currentHistoryStack.forEach((pancake) => {
      // create pancake; add class(es) to pancake
      const newHistoryPancake = document.createElement("div");
      newHistoryPancake.classList.add("card-pancake");

      // set pancake width
      const widthPercentage = (pancake / currentHistoryStack.length) * 100;
      newHistoryPancake.style.width = `${widthPercentage}%`;

      // add pancake to card
      newHistoryCard.append(newHistoryPancake);
    });

    // add card to .history div
    historyDOM.append(newHistoryCard);
  }
};

export default updateHistory;
