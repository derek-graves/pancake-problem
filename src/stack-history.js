const stackHistory = () => {
  let history = [];

  const getHistory = () => history;
  const pushStack = (stack) => {
    history.push(stack);
  };
  const popStack = () => {
    return history.pop();
  };
  const clearHistory = () => (history = []);
  const revertHistory = (index) => {
    const temp = history.slice(0, index + 1);
    const currentStack = history[index];
    history = temp;
    return currentStack;
  };

  return { getHistory, pushStack, popStack, clearHistory, revertHistory };
};

export default stackHistory;
