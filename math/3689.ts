// 3689. Maximum Total Subarray Value I

function maxTotalValue(nums: number[], k: number): number {
  const n = nums.length;

  if (n <= 1) return 0;

  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;

  for (let num of nums) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  return (max - min) * k;
}

const nums = [4, 2, 5, 1],
  k = 3;

console.log(maxTotalValue(nums, k));
