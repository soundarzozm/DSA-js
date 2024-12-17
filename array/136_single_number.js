class Solution {
  singleNumber(nums) {
    let ans = nums[0];

    for (let i = 1; i < nums.length; i++) {
      ans = ans ^ nums[i];
    }

    return ans;
  }
}

const solution = new Solution();
const nums = [4, 1, 2, 1, 2];
console.log(solution.singleNumber(nums));
