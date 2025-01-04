import { Queue } from "../queue";

class MyStack {
  primaryQueue: Queue<number>;
  secondaryQueue: Queue<number>;

  constructor() {
    this.primaryQueue = new Queue();
    this.secondaryQueue = new Queue();
  }

  push(x: number): void {
    this.primaryQueue.push(x);
  }

  pop(): number | undefined {
    while (this.primaryQueue.size() > 1) {
      this.secondaryQueue.push(this.primaryQueue.pop());
    }

    let poppedElement = this.primaryQueue.pop();

    while (this.secondaryQueue.size() > 0) {
      this.primaryQueue.push(this.secondaryQueue.pop());
    }

    return poppedElement;
  }

  top(): number {
    while (this.primaryQueue.size() > 1) {
      this.secondaryQueue.push(this.primaryQueue.pop());
    }
    let topElement = this.primaryQueue.peek();
    this.secondaryQueue.push(this.primaryQueue.pop());

    while (this.secondaryQueue.size() > 0) {
      this.primaryQueue.push(this.secondaryQueue.pop());
    }

    return topElement;
  }

  empty(): boolean {
    return this.primaryQueue.empty();
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

const obj = new MyStack();
obj.push(1);
obj.push(2);
console.log(obj.top());
console.log(obj.pop());
console.log(obj.empty());
