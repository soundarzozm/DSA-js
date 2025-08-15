// 0, 1, 1, 2, 3, 5, 8, etc.

// Recursion
function fibRecursion(n: number): number {
  if (n < 2) return n;
  return fibRecursion(n - 1) + fibRecursion(n - 2);
}

// Tabulation
function fibBottomUp(n: number): number {
  if (n < 2) return n;

  let dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// Recursion with cache
function fibTopDown(n: number, memo = new Map()): number {
  if (n < 2) return n;

  if (!memo.has(n)) {
    memo.set(n, fibTopDown(n - 1, memo) + fibTopDown(n - 2, memo));
  }

  return memo.get(n);
}

let n = 50;
// console.log(fibRecursion(n));
console.log(fibBottomUp(n));
console.log(fibTopDown(n));
