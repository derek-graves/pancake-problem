class Stack {
  constructor(order) {
    this.order = order;
  }

  flip(flipBeneath) {
    if (flipBeneath >= 0 && flipBeneath < this.order.length) {
      const flipped = this.order.slice(0, flipBeneath + 1);
      flipped.reverse();
      this.order.splice(0, flipBeneath + 1, ...flipped);
    }
  }

  get order() {
    return this._order;
  }
  set order(newOrder) {
    this._order = newOrder;
  }
}

class SandboxStack extends Stack {
  constructor(order) {
    super(order);
  }
  addPancake() {
    this.order.push(this.order.length + 1);
  }
  removePancake() {
    const largestPancake = Math.max(...this.order);
    const temp = this.order.filter((pancake) => pancake !== largestPancake);
    this.order = temp;
  }
  movePancake(from, to) {
    const validIndices =
      from >= 0 &&
      to >= 0 &&
      from < this.order.length &&
      to < this.order.length;
    if (validIndices) {
      const movingPancake = this.order.splice(from, 1)[0];
      this.order.splice(to, 0, movingPancake);
    }
  }
}

export { Stack, SandboxStack };
/*
const Stack = (order) => {
  const getOrder = () => order;
  const flip = (flipBeneath) => {
    if (flipBeneath >= 0 && flipBeneath < order.length) {
      const flipped = order.slice(0, flipBeneath + 1);
      flipped.reverse();
      order.splice(0, flipBeneath + 1, ...flipped);
    }
  };
  const addPancake = () => {
    order.push(order.length + 1);
  };
  const removePancake = () => {
    const largestPancake = Math.max(...order);
    const temp = order.filter((pancake) => pancake !== largestPancake);
    order = temp;
  };
  const movePancake = (from, to) => {
    const validIndices =
      from >= 0 && to >= 0 && from < order.length && to < order.length;
    if (validIndices) {
      const movingPancake = order.splice(from, 1)[0];
      order.splice(to, 0, movingPancake);
    }
  };
  return {
    getOrder,
    flip,
    addPancake,
    removePancake,
    movePancake,
  };
};
*/
