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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let h1 = headA
  let endOfA = h1

  while (headA.next) {
    headA = headA.next
  }

  endOfA = headA
  headA.next = headB

  let slowPointer = h1
  let fastPointer = h1

  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next
    slowPointer = slowPointer.next

    if (fastPointer == slowPointer) {
      break
    }
  }

  if (fastPointer != slowPointer) {
    endOfA.next = null
    return null
  }

  slowPointer = h1

  while (slowPointer != fastPointer) {
    slowPointer = slowPointer.next
    fastPointer = fastPointer.next
  }

  endOfA.next = null

  return slowPointer
};
