function threeSumClosest(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b);

  let ans = nums[0] + nums[1] + nums[2];
  let diff = Math.abs(target - ans);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      let curDiff = target - sum;

      if (Math.abs(curDiff) < diff) {
        diff = Math.abs(curDiff);
        ans = sum;
      }

      if (sum > target) k--;
      else j++;
    }
  }

  return ans;
}
