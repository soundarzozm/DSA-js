function findPeakElement(nums: number[]): number {
    let left = 0
    let right = nums.length - 1
    let mid
    let ans = Number.MIN_VALUE

    while (left <= right) {
      mid = Math.floor((left + right) / 2)

      if (mid === 0 || mid === nums.length - 1) {
        if (mid === 0) {
          if (nums[mid+1] > nums[mid]) return mid+1
          return mid
        } else {
          if (nums[mid-1] > nums[mid]) return mid-1
          return mid
        }
      }

      if (nums[mid + 1] > nums[mid]) left = mid + 1
      else if (nums[mid - 1] > nums[mid]) right = mid - 1
      else if (nums[mid + 1] < nums[mid] && nums[mid - 1] < nums[mid]) return mid
    }
};
