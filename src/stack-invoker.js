import pancakeStackCommands from "./stack-commands";

class PancakeStackInvoker {
  constructor(pancakeStack) {
    this.pancakeStack = pancakeStack;
    this.pancakeStackCommands = pancakeStackCommands;
    this.commandsHistory = [];
    this.position = 0;
  }

  executeCommand(request, args = []) {
    // remove undone commands upon new execution after undo(s)
    if (this.position < this.commandsHistory.length - 1) {
      this.commandsHistory = this.commandsHistory.slice(0, this.position + 1);
    }
    if (request) {
      const requestedCommand = this.pancakeStackCommands[request];
      const concreteCommand = new requestedCommand(this.pancakeStack, ...args);
      this.commandsHistory.push(concreteCommand);
      this.position += 1;
      concreteCommand.execute();
    }
  }
}
