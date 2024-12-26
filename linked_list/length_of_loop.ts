import { LL, LLNode } from "./ll";

function lengthOfLoop(head: LLNode): number {
  let slow: LLNode = head;
  let fast: LLNode = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) break;
  }

  if (!fast || !fast.next) return 0;

  if (slow.next == slow) return 1;

  let slow2 = slow.next;
  let count = 1;
  while (slow2 != slow) {
    count += 1;
    slow2 = slow2?.next;
  }

  return count;
}

let myLl = new LL([3, 2, 0, -4]);
let startNode = myLl.head.next?.next?.next;
let endNode = myLl.head.next;
startNode.next = endNode;
console.log(lengthOfLoop(myLl.head));
