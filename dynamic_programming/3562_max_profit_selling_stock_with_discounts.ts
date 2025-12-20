function maxProfit(
  n: number,
  present: number[],
  future: number[],
  hierarchy: number[][],
  budget: number,
): number {
  let adj = new Array(n).fill(0).map(() => []);
  for (let [u, v] of hierarchy) {
    adj[u - 1].push(v - 1);
  }

  let dp = new Array(n).fill(0).map(() => new Array(budget + 1).fill(0));

  function dfs(u: number) {
    let p = future[u] - present[u];
    if (present[u] <= budget) {
      dp[u][present[u]] = Math.max(0, p);
    }

    for (let v of adj[u]) {
      dfs(v);
      let next_dp = new Array(budget + 1).fill(0);
      for (let j = 0; j <= budget; j++) {
        if (dp[u][j] === 0 && j !== (present[u] <= budget ? present[u] : -1)) {
          if (dp[v][j] > next_dp[j]) next_dp[j] = dp[v][j];
          continue;
        }
        for (let k = 0; j + k <= budget; k++) {
          next_dp[j + k] = Math.max(next_dp[j + k], dp[u][j] + dp[v][k]);
        }
      }
      dp[u] = next_dp;
    }
  }

  let isChild = new Array(n).fill(false);
  for (let [u, v] of hierarchy) isChild[v - 1] = true;

  let totalMax = 0;
  for (let i = 0; i < n; i++) {
    if (!isChild[i]) {
      dfs(i);
      let currentRootMax = Math.max(...dp[i]);
      let nextTotal = new Array(budget + 1).fill(0);
      for (let j = 0; j <= budget; j++) {
        for (let k = 0; j + k <= budget; k++) {
          nextTotal[j + k] = Math.max(nextTotal[j + k], totalMax + dp[i][k]);
        }
      }
      totalMax = Math.max(...nextTotal);
    }
  }

  return totalMax;
}
