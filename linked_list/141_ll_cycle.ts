import { LL, LLNode } from "./ll";

function hasCycle(head: LLNode | null): boolean {
  let sp = head;
  let fp = head;

  while (fp && fp.next && fp.next.next) {
    fp = fp.next.next;
    sp = sp.next;

    if (sp === fp) return true;
  }

  return false;
}

let myLl = new LL([1, 3, 4]);
console.log(hasCycle(myLl.head));
