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
