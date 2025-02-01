function longestConsecutive(nums: number[]): number {
  let n = nums.length

  // First we add all the numbers to a set
  let s = new Set(nums)
  let globalMax = 0
  let localMax = 0
  let num: number

  for (let i = 0; i < n; i++) {
    num = nums[i]

    // We keep iterating through the array till we find an element which is the starting of a sequence
    if (s.has(num - 1)) {
      continue
    } else {
      // Since we found the starting of a sequence, we start counting the length of the sequence
      localMax = 1

      while (s.has(num + 1)) {
        localMax += 1
        num += 1
      }
      
      // Update globalMax if localMax is greater
      globalMax = Math.max(globalMax, localMax)
    }
  }

  return globalMax
};