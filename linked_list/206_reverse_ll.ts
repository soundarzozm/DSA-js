import { LL, LLNode } from "./ll";

function reverseLL(head: LLNode): LLNode {
  if (!head) return head;

  let h1 = head;
  let prev: LLNode | null = null;

  while (h1.next) {
    let nextBuff = h1.next;
    h1.next = prev;
    prev = h1;
    h1 = nextBuff;
  }

  h1.next = prev;

  return h1;
}

let myLl = new LL([1, 3, 4]);
console.log(reverseLL(myLl.head));
