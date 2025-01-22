function longestConsecutive(nums: number[]): number {
  let n = nums.length
  let s = new Set(nums)
  let globalMax = 0
  let localMax = 0
  let num: number

  for (let i = 0; i < n; i++) {
    num = nums[i]
    if (s.has(num - 1)) {
      continue
    } else {
      localMax = 1

      while (s.has(num + 1)) {
        localMax += 1
        num += 1
      }

      globalMax = Math.max(globalMax, localMax)
    }
  }

  return globalMax
};