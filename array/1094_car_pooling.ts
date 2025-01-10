function carPooling(trips: number[][], capacity: number): boolean {
  let array: number[] = []
  let ans = true
  let start = Number.MAX_VALUE
  let end = Number.MIN_VALUE
  let current = 0

  for(let i = 0; i < trips.length; i++) {
    start = Math.min(start, trips[i][1])
    end = Math.max(end, trips[i][2])
  }

  for (let i = start-1; i <= end; i++) {
    array.push(0)
  }

  for(let i = 0; i < trips.length; i++) {
    array[trips[i][1]] = array[trips[i][1]] + trips[i][0]
    array[trips[i][2]] = array[trips[i][2]] - trips[i][0]
  }

  for(let i = start; i<= end; i++) {
    if (array[i] > capacity) return false
  }

  for(let i = start+1; i<= end; i++) {
    current = array[i-1] + array[i]
    array[i] = current

    if (current > capacity) return false
  }

  return ans
};