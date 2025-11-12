function minOperations(nums: number[]): number {
  let n = nums.length;
  let ones = 0;

  let minLen = Infinity;

  for (let num of nums) {
    if (num === 1) ones++;
  }

  if (ones > 0) return n - ones;

  for (let i = 0; i < n - 1; i++) {
    let cur = 0;
    for (let j = i; j < n; j++) {
      cur = gcd(cur, nums[j]);

      if (cur === 1) {
        minLen = Math.min(minLen, j - i);
        break;
      }
    }
  }

  if (minLen === Infinity) return -1;

  ones = 1;
  return minLen + n - ones;
}

function gcd(a: number, b: number) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

let nums = [6, 10, 15];
console.log(minOperations(nums));
