function maxAdjacentDistance(nums: number[]): number {
  let ans = 0;
  ans = Math.max(ans, Math.abs(nums[0] - nums[nums.length - 1]));

  for (let i = 0; i < nums.length - 1; i++) {
    ans = Math.max(ans, Math.abs(nums[i] - nums[i + 1]));
  }

  return ans;
}

let array = [5, 5];
console.log(maxAdjacentDistance(array));
