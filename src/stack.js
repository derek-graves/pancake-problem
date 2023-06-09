class Stack {
  constructor(order) {
    this.order = order;
    // Use shallow copy to avoid reference sharing
    this.history = [[...this.order]];
  }

  get order() {
    return this._order;
  }
  set order(newOrder) {
    this._order = newOrder;
  }

  get history() {
    return this._history;
  }
  set history(newHistory) {
    this._history = newHistory;
  }

  flip(index) {
    const flipBeneath = parseInt(index);
    if (flipBeneath >= 0 && flipBeneath < this.order.length) {
      const flipped = this.order.slice(0, flipBeneath + 1);
      flipped.reverse();
      this.order.splice(0, flipBeneath + 1, ...flipped);
      // Use shallow copy to avoid reference sharing
      this.history.push([...this.order]);
    }
  }

  revert(index) {
    const temp = this.history.slice(0, index + 1);
    this.order = this.history[index];
    this.history = temp;
  }
}

class SandboxStack extends Stack {
  constructor(order) {
    super(order);
  }
  addPancake() {
    this.order.push(this.order.length + 1);
    this.history = [];
    this.history.push([...this.order]);
  }
  removePancake() {
    const largestPancake = Math.max(...this.order);
    const temp = this.order.filter((pancake) => pancake !== largestPancake);
    this.order = temp;
    this.history = [];
    this.history.push([...this.order]);
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
      this.history = [];
      this.history.push([...this.order]);
    }
  }
}

export { Stack, SandboxStack };
