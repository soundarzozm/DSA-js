class NumArray {
  prefixSumArray: number[]
  constructor(nums: number[]) {
    this.prefixSumArray = []

    let prefix = 0
    for (let i = 0; i < nums.length; i++) {
      this.prefixSumArray.push(prefix)
      prefix += nums[i]
    }
    this.prefixSumArray.push(prefix)
  }

  sumRange(left: number, right: number): number {
    return this.prefixSumArray[right+1] - this.prefixSumArray[left]
  }
}

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/