function findMissingNumber(nums: number[]): number {
  // Sum of natural numbers formula
  let len = nums.length;
  let totalSum = (len * (len + 1)) / 2;
  let calculatedSum = 0;

  for (let i = 0; i < len; i++) {
    calculatedSum += nums[i];
  }

  return totalSum - calculatedSum;
}

const nums = [0, 1, 2, 4];
console.log(findMissingNumber(nums));
