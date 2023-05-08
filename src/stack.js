const Stack = (order) => {
  const getOrder = () => order;
  const addPancake = () => {
    order.push(order.length + 1);
  };
  const removePancake = () => {
    const largestPancake = Math.max(...order);
    const temp = order.filter((pancake) => pancake !== largestPancake);
    order = temp;
  };
  const flip = (flipBeneath) => {
    if (flipBeneath >= 0 && flipBeneath < order.length) {
      const flipped = order.slice(0, flipBeneath + 1);
      flipped.reverse();
      order.splice(0, flipBeneath + 1, ...flipped);
    }
  };
  const movePancake = (from, to) => {
    const validIndices =
      from >= 0 && to >= 0 && from < order.length && to < order.length;
    if (validIndices) {
      const movingPancake = order.splice(from, 1)[0];
      order.splice(to, 0, movingPancake);
    }
  };

  return { getOrder, addPancake, removePancake, flip, movePancake };
};
