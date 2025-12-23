// fn(i, j) = lcs till text1[i] and text2[j]

function longestCommonSubsequence(text1: string, text2: string): number {
  let m = text1.length;
  let n = text2.length;

  function recursion(t1: number, t2: number): number {
    if (t1 <= 0 || t2 <= 0) return 0;

    if (text1[t1 - 1] === text2[t2 - 1]) {
      return 1 + recursion(t1 - 1, t2 - 1);
    }

    return Math.max(recursion(t1 - 1, t2), recursion(t1, t2 - 1));
  }

  return recursion(m, n);
}

function longestCommonSubsequenceBU(text1: string, text2: string): number {
  let m = text1.length;
  let n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

const text1 = "abcde",
  text2 = "ace";
console.log(longestCommonSubsequence(text1, text2));
