function numberOfPoints(nums: number[][]): number {
  // nums = nums.sort()
  let curr = 0
  let start = Number.MAX_VALUE
  let end =  Number.MIN_VALUE
  let nonOverlapping = 0
  let events = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (!events.has(nums[i][0])) events.set(nums[i][0], 0)
    if (!events.has(nums[i][1])) events.set(nums[i][1], 0)

    events.set(nums[i][0], events.get(nums[i][0]) + 1)
    events.set(nums[i][1], events.get(nums[i][1]) - 1)

    start = Math.min(start, nums[i][0])
    end = Math.max(end, nums[i][1])
  }

  for (let i = start; i <= end; i++) {
    if (events.has(i)) {
      curr += events.get(i)
      continue
    }

    if (curr == 0) nonOverlapping += 1
  }

  return end - start - nonOverlapping + 1
};