class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    let x = this.stack.pop();
    return x;
  }

  isEmpty() {
    if (this.stack.length == 0) {
      return true;
    }
    return false;
  }

  insertAtBottom(data) {
    if (!this.stack.length) {
      this.stack.push(data);
      return;
    }

    let Data = this.stack.pop();
    this.insertAtBottom(data);
    this.stack.push(Data);
    return this.stack;
  }

  reverse() {
    if (!this.stack.length) {
      return;
    }

    let temp = this.stack.pop();
    this.reverse();
    this.insertAtBottom(temp);
    return this.stack;
  }

  sort() {
    if (this.isEmpty()) {
      return;
    }

    let poppedElement = this.pop();
    this.sort();
    if (this.isEmpty()) {
      this.push(poppedElement);
    } else if (this.stack[this.stack.length - 1] > poppedElement) {
      this.insertAtBottom(poppedElement);
      this.sort();
    } else {
      this.push(poppedElement);
    }
    return this.stack;
  }
}

let myStack = new Stack();
myStack.push(12);
myStack.push(81);
myStack.push(6);
myStack.push(15);
myStack.push(8);
console.log(myStack.sort());
