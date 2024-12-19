import { LL, LLNode } from "./ll";

function deleteMiddle(head: LLNode | null): LLNode | null {
  if (!head) {
    return null;
  }

  let fp: LLNode | null = head;
  let sp: LLNode | null = head;
  let prev: LLNode | null = null;

  while (fp && fp.next) {
    fp = fp.next.next;
    prev = sp;
    sp = sp.next;
  }

  prev.next = sp.next;

  return head;
}

let myLl = new LL([1, 3, 4]);
console.log(deleteMiddle(myLl.head));
