class Solution {
  linearSearch(nums, k) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == k) return i;
    }

    return -1;
  }
}

const solution = new Solution();
const nums = [1, 2, 3, 4, 6];
const k = 10;
console.log(solution.linearSearch(nums, k));
