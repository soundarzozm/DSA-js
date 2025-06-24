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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let fp = head.next
  let sp = head

  while (fp && fp.next) {
    fp = fp.next.next
    sp = sp.next
  }

  let first = head
  let second = sp

  second = reverseList(second)

  while (first && second) {
    let newFirst = first.next
    let newSecond = second.next

    first.next = second
    second.next = newFirst

    first = newFirst
    second = newSecond
  }
};

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;

  let cur = head;
  let prev = null;
  let next = head.next

  while (next) {
    cur.next = prev
    prev = cur
    cur = next
    next = cur.next
  }

  cur.next = prev;

  return cur;
}
