class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head) return head;

  let mainHead: ListNode | null = null;

  let counter: number = 1;

  let cur: ListNode | null = head;
  let tail: ListNode | null = head;

  let next: ListNode | null = null;
  let prevTail: ListNode | null = null;

  while (tail) {
    if (counter % k !== 0) {
      tail = tail.next;
      counter += 1;
      continue;
    }

    // Preserve next
    next = tail.next;

    tail.next = null;

    tail = cur;
    cur = reverseList(cur);

    if (!mainHead) mainHead = cur;
    if (prevTail) prevTail.next = cur;

    prevTail = tail;

    cur = next;
    tail = next;

    counter += 1;
  }

  if (prevTail) prevTail.next = cur;

  return mainHead;
}

function reverseList(head: ListNode | null) {
  if (!head) return head;

  let prev: ListNode | null = null;
  let cur = head;
  let next = cur.next;

  while (next) {
    cur.next = prev;
    prev = cur;
    cur = next;
    next = cur.next;
  }

  cur.next = prev;

  return cur;
}
