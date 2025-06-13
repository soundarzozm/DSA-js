function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  let mid: number;
  let ans = nums[0];

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[left] < nums[right]) {
      right = mid - 1;
    } else {
      if (nums[mid] < nums[left]) right = mid;
      else left = mid + 1;
    }

    ans = nums[mid];
  }

  return ans;
}
