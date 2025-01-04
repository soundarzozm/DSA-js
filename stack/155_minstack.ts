import { Stack } from "./index";

class MinStack {
  stack: Stack<number>;
  minStack: Stack<number>;

  constructor() {
    this.stack = new Stack();
    this.minStack = new Stack();
  }

  push(val: number): void {
    if (this.stack.size() === 0) {
      this.stack.push(val);
      this.minStack.push(val);
      return;
    }

    this.stack.push(val);
    this.minStack.push(Math.min(val, this.minStack.top()));
  }

  pop(): void {
    this.minStack.pop();
    this.stack.pop();
  }

  top(): number {
    return this.stack.top();
  }

  getMin(): number {
    return this.minStack.top();
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
