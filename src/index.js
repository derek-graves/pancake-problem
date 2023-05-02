import "./style.css";

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

  return { getOrder, addPancake, removePancake, flip };
};

const test = Stack([1, 2, 4, 3]);
test.flip(3);
console.log(test.getOrder());
