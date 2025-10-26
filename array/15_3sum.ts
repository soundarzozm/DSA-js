function threeSum(nums: number[]): number[][] {
  let res = [];
  let n = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let lp = i + 1;
    let rp = n - 1;
    let target = nums[i] * -1;

    while (lp < rp) {
      let sum = nums[lp] + nums[rp];

      if (sum > target) rp -= 1;
      else if (sum < target) lp += 1;
      else {
        res.push([nums[i], nums[lp], nums[rp]]);
        lp += 1;
        while (lp < rp && nums[lp] === nums[lp - 1]) lp += 1;
      }
    }
  }

  return res;
}
