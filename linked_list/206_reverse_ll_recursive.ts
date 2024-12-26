import { LL, LLNode } from "./ll";

function reverseLL(head: LLNode): LLNode {
  if (head == null || head.next == null) return head;

  let newHead = reverseLL(head.next);
  let front = head.next;
  front.next = head;
  head.next = null;

  return newHead;
}

let myLl = new LL([1, 3, 4]);
myLl.printList();
reverseLL(myLl.head).printList();
