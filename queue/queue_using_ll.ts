import { LLNode } from "../linked_list/ll";

class MyQueue {
  top: LLNode<number> | null;

  constructor() {
    this.top = null;
  }

  push(x: number): void {
    let newElement = new LLNode(x);
    let head = this.top;

    if (!head) {
      this.top = newElement;
      return;
    }

    while (head.next) {
      head = head.next;
    }

    head.next = newElement;
  }

  pop(): number | null {
    let head = this.top;

    if (!head) {
      return -1;
    }

    this.top = head.next;

    return head.value;
  }
}

let obj = new MyQueue();
obj.push(2);
obj.push(3);
console.log(obj.pop());
obj.push(4);
console.log(obj.pop());
