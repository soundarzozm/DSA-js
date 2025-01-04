import { LLNode } from "../linked_list/ll";

class MyStack {
  top: LLNode<number> | null;

  constructor() {
    this.top = null;
  }

  push(x: number): void {
    let newElement = new LLNode(x);
    newElement.next = this.top;
    this.top = newElement;
  }

  pop(): number | null {
    let poppedElement = this.top;
    this.top = this.top?.next;

    return poppedElement?.value;
  }
}

let obj = new MyStack();
obj.push(2);
obj.push(3);
console.log(obj.pop());
obj.push(4);
console.log(obj.pop());
