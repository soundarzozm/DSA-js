class Solution {
  findMissingNumber(nums) {
    let len = nums.length;
    let totalSum = (len * (len + 1)) / 2;
    let calculatedSum = 0;

    for (let i = 0; i < len; i++) {
      calculatedSum += nums[i];
    }

    return totalSum - calculatedSum;
  }
}

const solution = new Solution();
const nums = [0, 1, 2, 4];
console.log(solution.findMissingNumber(nums));
