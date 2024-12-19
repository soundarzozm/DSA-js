import { DLL, DLLNode } from "./dll";

function deleteNode(head: DLLNode, x: number): DLLNode | null {
  if (x === 1) {
    let h1 = head;
    if (h1.next) {
      h1 = h1.next;
      h1.prev = null;
      return h1;
    }
    return null;
  }

  let idx = 1;
  let h1 = head;
  let prev = null;

  while (idx < x) {
    prev = h1;
    h1 = h1.next;
    idx += 1;
  }

  let nextNode = h1.next;

  if (nextNode) {
    nextNode.prev = prev;
    prev.next = nextNode;
  } else {
    prev.next = null;
  }

  return head;
}

let myDll = new DLL([1, 3, 4]);
let position = 3;
console.log(deleteNode(myDll.head, position));
