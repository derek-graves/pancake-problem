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

  undo() {
    if (this.position > 0) {
      // execute reset command
      const tempReset = new this.pancakeStackCommands["RESET"](
        this.pancakeStack
      );
      tempReset.execute();

      // execute all commands up to position - 1
      for (let i = 0; i < this.position - 1; i++) {
        this.commandsHistory[i].execute();
      }

      this.position -= 1;
    }
  }

  redo() {
    if (this.position < this.commandsHistory.length - 1) {
      this.position += 1;
      this.commandsHistory[this.position].execute();
    }
  }
}

export default PancakeStackInvoker;
