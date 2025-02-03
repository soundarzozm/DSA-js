import { LL, LLNode } from "./ll";

function deleteNode(node: LLNode<number>): void {
  let curr = node;
  let prev = null;

  while (curr.next) {
    curr.value = curr.next.value;
    prev = curr;
    curr = curr.next;
  }

  prev.next = null;
}

let arr = [4, 5, 1, 9];
let myLL = new LL(arr);
deleteNode(myLL.head.next);
myLL.printList();
