// 2958. Length of Longest Subarray With at Most K Frequency

function maxSubarrayLength(nums: number[], k: number): number {
  const n = nums.length;
  let ans = 0;
  const map = new Map();

  let l = 0;
  let r = 0;

  while (r < n) {
    if (!map.has(nums[r])) map.set(nums[r], 0);
    map.set(nums[r], map.get(nums[r]) + 1);

    while (map.get(nums[r]) > k) {
      map.set(nums[l], map.get(nums[l]) - 1);
      l++;
    }

    ans = Math.max(ans, r - l + 1);
    r++;
  }

  return ans;
}

const nums = [1, 2, 3, 1, 2, 3, 1, 2];
const k = 2;

console.log(maxSubarrayLength(nums, k));
