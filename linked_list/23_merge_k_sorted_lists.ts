import { MinHeap } from "../heap/MinHeap";

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let minHeap = new MinHeap<ListNode>((node: ListNode) => node.val);

  let ans: ListNode | null = null;
  let cur: ListNode | null = null;

  for (let node of lists) {
    node && minHeap.insert(node);
  }

  while (minHeap.size() > 0) {
    let node: ListNode = minHeap.extractMin();
    let nextNode: ListNode | null = node.next;
    node.next = null;

    nextNode && minHeap.insert(nextNode);

    if (!ans) {
      ans = node;
      cur = node;
    } else {
      cur.next = node;
      cur = cur.next;
    }
  }

  return ans;
}
