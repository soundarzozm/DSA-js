import { DLL, DLLNode } from "./dll";

function reverseDLL(head: DLLNode): DLLNode {
  let h1 = head;

  while (h1.next) {
    let nextBuff = h1.next;
    h1.next = h1.prev;
    h1.prev = nextBuff;
    h1 = nextBuff;
  }

  h1.next = h1.prev;
  h1.prev = null;

  return h1;
}

let myDll = new DLL([1, 3, 4]);
console.log(reverseDLL(myDll.head));
