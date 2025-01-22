function leaders(arr: number[]) {
  let ans: number[] = []
  let n = arr.length
  let maxNum = arr[n-1]
  
  for (let i = n-1; i >= 0; i--) {
      if (arr[i] >= maxNum) {
          maxNum = arr[i]
          ans.push(maxNum)
      }
  }
  
  ans.reverse()
  return ans
}