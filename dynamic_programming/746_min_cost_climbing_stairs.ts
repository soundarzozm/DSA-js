function minCostClimbingStairs(cost: number[]): number {
  let n = cost.length;

  function recursion(i: number): number {
    if (i < 2) return cost[i];
    return cost[i] + Math.min(recursion(i - 1), recursion(i - 2));
  }

  return Math.min(recursion(n - 1), recursion(n - 2));
}

function minCostClimbingStairsBU(cost: number[]): number {
  let n = cost.length;
  let dp = new Array(n);

  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < n; ++i) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }

  return Math.min(dp[n - 1], dp[n - 2]);
}

function minCostClimbingStairsTD(cost: number[]): number {
  let n = cost.length;
  let memo = new Map();

  function topDown(i: number): number {
    if (i < 2) return cost[i];

    if (!memo.has(i)) {
      memo.set(i, cost[i] + Math.min(topDown(i - 1), topDown(i - 2)));
    }

    return memo.get(i);
  }

  return Math.min(topDown(n - 1), topDown(n - 2));
}

let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairsBU(cost));
console.log(minCostClimbingStairsTD(cost));
// console.log(minCostClimbingStairs(cost));
