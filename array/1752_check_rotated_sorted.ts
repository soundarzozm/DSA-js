function check(nums: number[]): boolean {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) count += 1;
  }

  if (nums[nums.length - 1] > nums[0]) count += 1;

  return count < 2;
}
