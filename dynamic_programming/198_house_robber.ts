function rob(nums: number[]): number {
  let n = nums.length;

  function recursion(i: number): number {
    if (i < 0) return 0;
    return Math.max(nums[i] + recursion(i - 2), recursion(i - 1));
  }

  return recursion(n - 1);
}

function robTD(nums: number[]): number {
  let n = nums.length;
  let memo = new Map();

  function recursion(i: number) {
    if (i < 0) return 0;

    if (!memo.has(i))
      memo.set(i, Math.max(nums[i] + recursion(i - 2), recursion(i - 1)));
    return memo.get(i);
  }

  return recursion(n - 1);
}

function robBU(nums: number[]): number {
  let n = nums.length;
  let dp = new Array(n);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; ++i) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[n - 1];
}

let nums = [
  114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223, 58,
  170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187, 69,
  129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144, 240,
];
console.log(robBU(nums));
console.log(robTD(nums));
