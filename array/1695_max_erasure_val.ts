function maximumUniqueSubarray(nums: number[]): number {
  let ans = 0;
  let sum = 0;

  let l = 0;
  let r = 0;

  let s = new Set();

  while (r < nums.length) {
    while (s.has(nums[r])) {
      s.delete(nums[l]);
      sum -= nums[l];
      l++;
    }

    s.add(nums[r]);
    sum += nums[r];
    r++;

    ans = Math.max(ans, sum);
  }

  return ans;
}
