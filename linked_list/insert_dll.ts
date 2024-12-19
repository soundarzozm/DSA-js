import { DLL, DLLNode } from "./dll";

function addNode(head: DLLNode, p: number, x: string | number): DLLNode | null {
  let idx = 0;
  let h1: DLLNode | null = head;

  while (idx < p) {
    h1 = h1.next;
    idx += 1;
  }

  let nextNode = h1.next;
  let newNode = new DLLNode(x);

  newNode.prev = h1;
  newNode.next = nextNode;

  h1.next = newNode;

  if (nextNode) {
    nextNode.prev = newNode;
  }

  return head;
}

let myDll = new DLL([2, 4, 5]);
let position = 2;
let value = 6;
console.log(addNode(myDll.head, position, value))
