function countValidSelections(nums: number[]): number {
  let ans = 0;
  let pre = 0;
  let suf = 0;
  for (let num of nums) suf += num;

  for (let i = 0; i < nums.length; ++i) {
    suf -= nums[i];
    if (nums[i] === 0) {
      if (suf - pre === 0) ans += 2;
      if (Math.abs(suf - pre) === 1) ans++;
    }
    pre += nums[i];
  }

  return ans;
}
