// 0, 1, 2, 3, 5, 8, 13, etc.
// Same as fibonacci lol

function climbStairs(n: number): number {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
}

function climbStairsBottomUp(n: number): number {
  let dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

function climbStairsTopDown(n: number, memo = new Map()): number {
  if (n <= 2) return n;

  if (!memo.has(n)) {
    memo.set(
      n,
      climbStairsTopDown(n - 1, memo) + climbStairsTopDown(n - 2, memo),
    );
  }

  return memo.get(n);
}

let n = 6;
console.log(climbStairsBottomUp(n));
console.log(climbStairsTopDown(n));
console.log(climbStairs(n));
