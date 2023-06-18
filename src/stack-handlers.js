import { renderStackAndHistory } from "./render";

const clickHandlerStack = (event, stackObject) => {
  const selectedPancake = event.target.dataset.stackIndex;

  // only run when pancake is clicked
  if (!selectedPancake) return;

  stackObject.flip(selectedPancake);

  renderStackAndHistory(stackObject);
};

export { clickHandlerStack };
