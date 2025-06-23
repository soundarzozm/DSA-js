import { LLNode as ListNode } from "./ll";

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     value: number
 *     next: ListNode | null
 *     constructor(value?: number, next?: ListNode | null) {
 *         this.value = (value===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  list1: ListNode<number> | null,
  list2: ListNode<number> | null,
): ListNode<number> | null {
  if (!list1) return list2;
  if (!list2) return list1;

  let head: ListNode<number> | null;

  if (list1.value < list2.value) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }

  let cur = head;

  while (list1 && list2) {
    if (list1.value < list2.value) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }

    cur = cur.next;
  }

  if (list1) cur.next = list1;
  if (list2) cur.next = list2;

  return head;
}
