class Solution {
  findMaxConsecutiveOnes(nums) {
    let ans = 0;
    let locSum = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 1) {
        locSum += 1;
        ans = locSum > ans ? locSum : ans;
      } else locSum = 0;
    }

    return ans;
  }
}

const solution = new Solution();
const nums = [1, 1, 0, 1, 1, 1];
console.log(solution.findMaxConsecutiveOnes(nums));
