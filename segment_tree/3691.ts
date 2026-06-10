// 3691. Maximum Total Subarray Value II
import SegmentTree from "./index.ts";
import { MaxHeap } from "../heap/MaxHeap.ts";

function maxTotalValue(nums: number[], k: number): number {
  const n = nums.length;
  const seg = new SegmentTree(nums);

  const heap = new MaxHeap((item: [number, number, number]) => item[0]);
  for (let l = 0; l < n; l++) {
    heap.push([seg.queryMax(l, n - 1) - seg.queryMin(l, n - 1), l, n - 1]);
  }
  let ans = 0;
  while (k--) {
    const [val, l, r] = heap.pop()!;
    ans += val;
    if (r > l) {
      heap.push([seg.queryMax(l, r - 1) - seg.queryMin(l, r - 1), l, r - 1]);
    }
  }
  return ans;
}

const nums = [4, 2, 5, 1],
  k = 3;
console.log(maxTotalValue(nums, k));
