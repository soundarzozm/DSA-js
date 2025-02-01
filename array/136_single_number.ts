function singleNumber(nums: number[]): number {
  // XOR of same numbers is 0
  // So if we XOR all the numbers we will be left with the single number
  let ans = nums[0];

  for (let i = 1; i < nums.length; i++) {
    ans = ans ^ nums[i];
  }

  return ans;
}

const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
