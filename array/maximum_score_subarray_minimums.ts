function pairWithMaxSum(arr: number[]) {
  let len = arr.length
  
  if (len < 2) return -1
  
  let ans = arr[0] + arr[1]
  
  for (let i = 1; i < len-1; i++ ) {
      ans = Math.max(ans, arr[i] + arr[i+1])
  }
  
  return ans
}