function findMissingAndRepeating(nums: number[]): number[] {
  let res: number[] = [-1, -1];
  let missing: number;
  let repeating: number;

  let n = nums.length;
  let cSum = (n * (n + 1)) / 2;
  let aSum = 0;

  let cSum_2 = (n * (n + 1) * (2 * n + 1)) / 6;
  let aSum_2 = 0;

  for (let i = 0; i < n; i++) {
    aSum += nums[i];
    aSum_2 += nums[i] * nums[i];
  }

  let val1: number = cSum - aSum;
  let val2: number = cSum_2 - aSum_2;

  let val3 = val2 / val1;

  missing = (val1 + val3) / 2;
  repeating = val3 - missing;

  return [repeating, missing];
}

let nums = [2, 2];
console.log(findMissingAndRepeating(nums));
