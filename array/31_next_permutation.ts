function nextPermutation(nums: number[]): void {
  // We iterate the array from the end (least significant digits)
  const n: number = nums.length;
  let index: number = n - 2;
  
  // We keep iterating till the array is in descending order
  // If this reaches 0 then the entire array is in descending order and we can just reverse the array
  while (index >= 0 && nums[index] >= nums[index + 1]) {
    index--;
  }

  if (index >= 0) {
    let j: number = n - 1;
    // We find the first element from the end that is greater than the element
    // Because that will be the smallest number greater than pivot (since array is in descending order)
    while (j > index && nums[j] <= nums[index]) {
      j--;
    }
    [nums[index], nums[j]] = [nums[j], nums[index]];
  }

  // This sorts the remaining array in ascending order because it is already in descending order
  reverse(nums, index + 1, n - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}
