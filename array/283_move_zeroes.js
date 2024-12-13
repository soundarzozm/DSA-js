class Solution {
  moveZeroes(nums) {
    if (nums.length == 1) {
      return;
    }

    let lp = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != 0) {
        nums[lp] = nums[i];
        lp += 1;
      }
    }

    for (let i = lp; i < nums.length; i++) {
      nums[i] = 0;
    }
  }
}

const solution = new Solution();
const nums = [0, 1, 0, 3, 12];
solution.moveZeroes(nums);
console.log(nums);
