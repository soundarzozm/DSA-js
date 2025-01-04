class Solution {
  removeDuplicates(nums) {
    let lp = 0;

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] != nums[lp]) {
        nums[lp + 1] = nums[i];
        lp += 1;
      }
    }

    return lp + 1;
  }
}

const solution = new Solution();
const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(solution.removeDuplicates(arr));
