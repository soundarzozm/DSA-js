/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: _Node | null): _Node | null {
  let map = new Map();

  let cur = head;

  while (cur) {
    let newCur = new _Node(cur.val);
    map.set(cur, newCur);
    cur = cur.next;
  }

  cur = head;

  while (cur) {
    let newCur = map.get(cur);
    newCur.next = map.get(cur.next) || null;
    newCur.random = map.get(cur.random) || null;
    cur = cur.next;
  }

  let newHead = map.get(head);

  return newHead;
}
