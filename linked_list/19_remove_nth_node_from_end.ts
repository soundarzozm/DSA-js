import { LL, LLNode } from "./ll";

function removeNthFromEnd(head: LLNode, n: number): LLNode | null {
  // total - n = x
  // total - x = n
  // total = x + n

  let fp: LLNode | null = head;
  let count = 0;

  while (fp && count < n) {
    fp = fp.next;
    count += 1;
  }

  if (!fp && count == n) {
    return head.next;
  }

  if (!fp) return null;

  let prev: LLNode | null = null;
  let sp: LLNode | null = head;

  while (fp) {
    prev = sp;
    sp = sp.next;
    fp = fp.next;
  }

  prev.next = sp.next;

  return head;
}

let myLl = new LL([1, 2, 3, 4, 5]);
console.log(removeNthFromEnd(myLl.head, 2)?.printList());
