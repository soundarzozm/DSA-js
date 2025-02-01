function moveZeroes(nums: number[]): void {
  // The left pointer keeps track of all the non-zero elements
  let lp = 0;

  // As we find non-zero elements, we move them to the left pointer
  // This means that number is processed and we can move the left pointer
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[lp] = nums[i];
      lp += 1;
    }
  }

  while (lp < nums.length) {
    nums[lp] = 0;
    lp++;
  }
}

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
