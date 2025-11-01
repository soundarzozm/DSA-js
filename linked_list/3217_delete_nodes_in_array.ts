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

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  let set = new Set([...nums]);

  while (head && set.has(head.val)) head = head.next;
  if (!head) return head;

  let prev = head;
  let cur = head.next;
  let ans = head;

  while (cur) {
    while (cur && set.has(cur.val)) cur = cur.next;
    if (cur) {
      prev.next = cur;
      prev = cur;
      cur = cur.next;
    } else prev.next = null;
  }

  return ans;
}
