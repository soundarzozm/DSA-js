function maxFrequency(
  nums: number[],
  k: number,
  numOperations: number,
): number {
  let ans = 0;
  let maxElement = Math.max(...nums);
  let freq = new Array(maxElement + 1).fill(0);

  for (let num of nums) freq[num] = freq[num] + 1;
  for (let i = 1; i < freq.length; i++) freq[i] = freq[i] + freq[i - 1];

  for (let i = 0; i <= maxElement; i++) {
    let left = Math.max(i - k, 0);
    let right = Math.min(i + k, maxElement);

    let totalCount = freq[right] - (left > 0 ? freq[left - 1] : 0);
    let currElementCount = freq[i] - (i > 0 ? freq[i - 1] : 0);

    let needConversion = totalCount - currElementCount;
    let finalCount = currElementCount + Math.min(needConversion, numOperations);

    ans = Math.max(finalCount, ans);
  }

  return ans;
}

let nums = [1, 4, 5];
let k = 1;
let numOperations = 2;

console.log(maxFrequency(nums, k, numOperations));
