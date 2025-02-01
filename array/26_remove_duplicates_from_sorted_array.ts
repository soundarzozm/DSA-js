function removeDuplicates(nums: number[]): number {
  // We initialize a left pointer lp to 0
  // This will move as we find unique elements
  let lp = 0;

  // We initialize a right pointer rp to 1
  // This will iterate through the array completely
  // As it moves, we compare if the rp element is equal to the lp element
  // If they're equal it's a duplicate
  // If they're not equal, we move the lp pointer to the next index store the rp value there
  for (let rp = 1; rp < nums.length; rp++) {
    if (nums[rp] != nums[lp]) {
      nums[lp + 1] = nums[rp];
      lp += 1;
    }
  }

  return lp + 1;
}

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr));
