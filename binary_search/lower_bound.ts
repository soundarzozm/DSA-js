function findLowerBound(nums: number[], target: number): number {
  let left = 0;
  let ans = -1;
  let right = nums.length - 1;
  let mid: number;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      ans = mid;
      left = mid + 1;
    }
  }

  return nums[ans];
}

let nums = [1, 2, 8, 10, 11, 12, 19];
let target = 3;

console.log(findLowerBound(nums, target));