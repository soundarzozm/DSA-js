/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head): boolean {
  let h1 = head;
  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  let h2 = reverseLL(slowPointer);

  while (h1 && h2) {
    if (h1.val != h2.val) return false;
    h1 = h1.next;
    h2 = h2.next;
  }

  return true;
}

function reverseLL(head) {
  if (!head) return head;

  let h1 = head;
  let prev = null;

  while (h1.next) {
    let nextBuff = h1.next;
    h1.next = prev;
    prev = h1;
    h1 = nextBuff;
  }

  h1.next = prev;

  return h1;
}
