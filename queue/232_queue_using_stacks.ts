import { Stack } from "../stack";

class MyQueue {
  primaryStack: Stack<number>;
  secondaryStack: Stack<number>;

  constructor() {
    this.primaryStack = new Stack();
    this.secondaryStack = new Stack();
  }

  push(x: number): void {
    this.primaryStack.push(x);
  }

  pop(): number | undefined {
    while (this.primaryStack.size() > 1) {
      this.secondaryStack.push(this.primaryStack.pop());
    }

    let poppedElement = this.primaryStack.pop();

    while (this.secondaryStack.size() > 0) {
      this.primaryStack.push(this.secondaryStack.pop());
    }

    return poppedElement;
  }

  peek(): number {
    while (this.primaryStack.size() > 1) {
      this.secondaryStack.push(this.primaryStack.pop());
    }

    let firstElement = this.primaryStack.top();
    this.secondaryStack.push(this.primaryStack.pop());

    while (this.secondaryStack.size() > 0) {
      this.primaryStack.push(this.secondaryStack.pop());
    }

    return firstElement;
  }

  empty(): boolean {
    return this.primaryStack.empty();
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

let obj = new MyQueue();
obj.push(1);
obj.push(2);
console.log(obj.peek());
console.log(obj.pop());
console.log(obj.empty());
