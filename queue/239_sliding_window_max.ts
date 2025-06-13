import { Deque } from "./deque.js";

function maxSlidingWindow(nums: number[], k: number): number[] {
  let deque: Deque<number> = new Deque();
  let ans = new Array();

  let left = 0;
  let right = 0;

  while (right < k) {
    if (deque.isEmpty()) deque.pushFront(nums[right]);
    else if (nums[right] > deque.front()) {
      while (!deque.isEmpty() && nums[right] > deque.front()) {
        deque.popFront();
      }
      deque.pushFront(nums[right]);
    } else {
      while (!deque.isEmpty() && nums[right] > deque.back()) {
        deque.popBack();
      }
      deque.pushBack(nums[right]);
    }
    right += 1;
  }

  ans.push(deque.front());

  while (right < nums.length) {
    if (nums[left] === deque.front()) deque.popFront();

    if (deque.isEmpty()) deque.pushFront(nums[right]);
    else if (nums[right] > deque.front()) {
      while (!deque.isEmpty() && nums[right] > deque.front()) {
        deque.popFront();
      }
      deque.pushFront(nums[right]);
    } else {
      while (!deque.isEmpty() && nums[right] > deque.back()) {
        deque.popBack();
      }
      deque.pushBack(nums[right]);
    }
    left += 1;
    right += 1;
    ans.push(deque.front());
  }

  return ans;
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;

console.log(maxSlidingWindow(nums, k));
