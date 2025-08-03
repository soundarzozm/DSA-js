function smallestSubarrays(nums: number[]): number[] {
  const n = nums.length;

  const pos: number[] = new Array(31).fill(-1);
  const ans: number[] = new Array(n);

  for (let i = n - 1; i >= 0; --i) {
    let currentMaxLen = 1;

    for (let j = 0; j < 31; ++j) {
      // Check if the j-th bit is set in nums[i]
      if ((nums[i] >> j) & 1) {
        pos[j] = i;
      } else {
        if (pos[j] !== -1) {
          currentMaxLen = Math.max(currentMaxLen, pos[j] - i + 1);
        }
      }
    }
    ans[i] = currentMaxLen;
  }

  return ans;
}

let nums = [1, 0, 2, 1, 3];
console.log(smallestSubarrays(nums));
