function findMaxLength(nums: number[]): number {
  let hashMap = new Map<number, number>();
  let ans = 0;
  let zeros = 0;
  let ones = 0;
  let diff = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) zeros += 1;
    else ones += 1;

    diff = ones - zeros;

    if (diff == 0) {
      ans = i + 1;
    } else {
      if (hashMap.has(diff)) {
        ans = Math.max(ans, i - hashMap.get(diff));
      } else {
        hashMap.set(diff, i);
      }
    }
  }
  return ans;
}
