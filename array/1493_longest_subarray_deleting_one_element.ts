function longestSubarray(nums: number[]): number {
  let ans = 0;

  let left = 0;
  let right = 0;
  let count = 0;

  while (right < nums.length) {
    if (nums[right] === 0) count++;

    while (count > 1) {
      if (nums[left] === 0) count--;
      left++;
    }

    ans = Math.max(ans, right - left + 1);
    right++;
  }

  return ans - 1;
}

let nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];
console.log(longestSubarray(nums));
