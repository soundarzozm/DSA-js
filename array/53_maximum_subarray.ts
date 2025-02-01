// Kadane's algorithm
// If the localSum till a point is negative, there is no point in considering that subarray.

function maxSubArray(nums: number[]): number {
  let globalSum = nums[0]
  let localSum = 0
  for (let i = 0; i < nums.length; i++) {
    if (localSum < 0) localSum = 0
    localSum += nums[i]
    globalSum = Math.max(globalSum, localSum)
  }

  return globalSum
};