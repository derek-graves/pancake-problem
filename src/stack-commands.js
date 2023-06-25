// implement base command class as 'abstract' to ensure all pancake
// stack commands inherit correct behavior and properties
class PancakeStackCommand {
  constructor(pancakeStack) {
    if (this.constructor == PancakeStackCommand) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.pancakeStack = pancakeStack;
  }

  execute() {
    throw new Error("Method 'execute()' must be implemented");
  }
}

class FlipCommand extends PancakeStackCommand {
  constructor(pancakeStack, index) {
    super(pancakeStack);
    this.index = parseInt(index);
  }

  execute() {
    this.pancakeStack.flip(this.index);
  }
}

class RevertFlipsCommand extends PancakeStackCommand {
  constructor(pancakeStack, index) {
    super(pancakeStack);
    this.index = parseInt(index);
  }

  execute() {
    this.pancakeStack.revert(this.index);
  }
}

class ResetCommand extends PancakeStackCommand {
  constructor(pancakeStack) {
    super(pancakeStack);
  }

  execute() {
    this.pancakeStack.reset();
  }
}

class AddPancakeCommand extends PancakeStackCommand {
  constructor(pancakeStack) {
    super(pancakeStack);
  }

  execute() {
    this.pancakeStack.addPancake();
  }
}

class RemovePancakeCommand extends PancakeStackCommand {
  constructor(pancakeStack) {
    super(pancakeStack);
  }

  execute() {
    this.pancakeStack.removePancake();
  }
}

class DragPancakeCommand extends PancakeStackCommand {
  constructor(pancakeStack, from, to) {
    super(pancakeStack);
    this.dragFrom = from;
    this.dragTo = to;
  }

  execute() {
    this.pancakeStack.movePancake(this.dragFrom, this.dragTo);
  }
}
