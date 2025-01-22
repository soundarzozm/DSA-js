function nextPermutation(nums: number[]): void {
  const n: number = nums.length;
  let index: number = n - 2;

  while (index >= 0 && nums[index] >= nums[index + 1]) {
    index--;
  }

  if (index >= 0) {
    let j: number = n - 1;
    while (j > index && nums[j] <= nums[index]) {
      j--;
    }
    [nums[index], nums[j]] = [nums[j], nums[index]];
  }
  reverse(nums, index + 1, n - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}
