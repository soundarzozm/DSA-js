// f(n) = dp[n] = min cost required to get to step n

function minCostClimbingStairs(cost: number[]): number {
  let n = cost.length;

  function recursion(i: number): number {
    if (i <= 1) return 0;
    return Math.min(
      cost[i - 1] + recursion(i - 1),
      cost[i - 2] + recursion(i - 2),
    );
  }

  return recursion(n);
}

function minCostClimbingStairsBU(cost: number[]): number {
  let n = cost.length;
  let dp = new Array(n + 1);

  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(cost[i - 1] + dp[i - 1], cost[i - 2] + dp[i - 2]);
  }

  return dp[n];
}

function minCostClimbingStairsTD(cost: number[]): number {
  let n = cost.length;
  let memo = new Map();

  function topDown(i: number): number {
    if (i < 2) return 0;

    if (!memo.has(i)) {
      memo.set(
        i,
        Math.min(cost[i - 1] + topDown(i - 1), cost[i - 2] + topDown(i - 2)),
      );
    }

    return memo.get(i);
  }

  return topDown(n);
}

let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairsBU(cost));
console.log(minCostClimbingStairsTD(cost));
// console.log(minCostClimbingStairs(cost));
