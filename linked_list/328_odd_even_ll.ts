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

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  let oddHead = null
  let evenHead = null
  let count = 1

  let h1 = head
  let h2 = null

  while (h1) {
    if (count % 2 == 0) {
      if (evenHead) {
        evenHead.next = h1
        evenHead = evenHead.next
      }
      else {
        evenHead = h1
        h2 = evenHead
      }
    } else {
      if (oddHead) {
        oddHead.next = h1
        oddHead = oddHead.next
      }
      else oddHead = h1
    }
    h1 = h1.next
    count += 1
  }

  oddHead.next = h2
  evenHead.next = null

  return head
};
