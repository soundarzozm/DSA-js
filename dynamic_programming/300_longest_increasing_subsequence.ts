// f(n) = max length of LIS till index n

function lengthOfLIS(nums: number[]): number {
  let n = nums.length;

  function recursion(prev: number, idx: number): number {
    if (idx < 0) return 0;

    let notTake = recursion(prev, idx - 1);
    let take = 0;

    if (nums[idx] < prev) {
      take = 1 + recursion(nums[idx], idx - 1);
    }

    return Math.max(take, notTake);
  }

  return recursion(Infinity, n);
}

function lengthOfLISTD(nums: number[]): number {
  let n = nums.length;
  let memo = new Map();

  function recursion(prev: number, idx: number): number {
    let key = `${prev},${idx}`;
    if (idx < 0) return 0;
    if (memo.has(key)) return memo.get(key);

    let notTake = recursion(prev, idx - 1);
    let take = 0;

    if (nums[idx] < prev) {
      take = 1 + recursion(nums[idx], idx - 1);
    }

    memo.set(key, Math.max(take, notTake));
    return memo.get(key);
  }

  return recursion(Infinity, n);
}

function lengthOfLISBU(nums: number[]): number {
  let n = nums.length;
  let dp = new Array(n + 1).fill(1);

  let ans = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }

    ans = Math.max(ans, dp[i]);
  }

  return ans;
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));
