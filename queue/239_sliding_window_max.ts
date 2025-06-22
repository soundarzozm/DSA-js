import { Deque } from "./deque.js";

function maxSlidingWindow(nums: number[], k: number): number[] {
  let deq = new Deque<number>();
  let ans: number[] = [];

  for (let i = 0; i < nums.length; ++i) {
    while (!deq.isEmpty() && deq.front() < i - k + 1) deq.popFront();

    while (!deq.isEmpty() && nums[i] > nums[deq.back()]) deq.popBack();
    deq.pushBack(i);

    if (i > k - 2) ans.push(nums[deq.front()]);
  }

  return ans;
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;

console.log(maxSlidingWindow(nums, k));
