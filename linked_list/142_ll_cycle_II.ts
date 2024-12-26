import { LL, LLNode } from "./ll";

function detectCycle(head: LLNode): LLNode | null {
  let slow: LLNode = head;
  let fast: LLNode = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) break;
  }

  if (!fast || !fast.next) return null;

  fast = head;

  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}

let myLl = new LL([3, 2, 0, -4]);
let startNode = myLl.head.next?.next?.next;
let endNode = myLl.head.next;
startNode.next = endNode;
console.log(detectCycle(myLl.head)?.value);
