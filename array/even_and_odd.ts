function reArrange(nums: number[], n: number): void {
  let eptr = 0
  let optr = 1
  
  while (eptr < n && optr < n) {
    while (eptr < n && (eptr % 2 === 0 && nums[eptr] % 2 === 0)) {
      eptr += 2
    }

    while (optr < n && (optr % 2 !== 0 && nums[optr] % 2 !== 0)) {
      optr += 2
    }

    if (eptr < n && optr < n) {
      let temp = nums[eptr]
      nums[eptr] = nums[optr]
      nums[optr] = temp 
    } else break
  }
}

let nums = [3, 6, 12, 1, 5, 8]
reArrange(nums, nums.length);
console.log(nums)
