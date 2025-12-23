// f(r, c) = number of ways u can reach cell (r, c)
// f(r, c) = f(r-1, c) + f(r+1, c) + f(r, c-1), f(r, c+1)

function uniquePaths(m: number, n: number): number {
  const dp = new Array();
  for (let i = 0; i < m; i++) {
    dp.push(new Array(n).fill(0));
  }

  dp[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      if (i + 1 < m) dp[i][j] += dp[i + 1][j];
      if (i - 1 >= 0) dp[i][j] += dp[i - 1][j];
      if (j + 1 < n) dp[i][j] += dp[i][j + 1];
      if (j - 1 >= 0) dp[i][j] += dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

const m = 3,
  n = 7;
console.log(uniquePaths(m, n));
