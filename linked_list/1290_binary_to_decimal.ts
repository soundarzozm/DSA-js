import { LLNode } from "./ll.ts";

function getDecimalValue(head: LLNode<number> | null): number {
  let n = 0;
  let h1 = head;
  let ans = 0;

  while (h1) {
    h1 = h1.next;
    ++n;
  }

  h1 = head;
  let cur = 1;

  while (h1) {
    if (h1.value === 1) ans += Math.pow(2, n - cur);
    ++cur;
    h1 = h1.next;
  }

  return ans;
}
