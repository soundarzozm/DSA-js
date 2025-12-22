function coinChange(coins: number[], amount: number): number {
  let ans = Infinity;
  function recursion(amt: number): number {
    if (amt === 0) return 0;
    if (amt < 0) return Infinity;

    let res = Infinity;

    for (let coin of coins) {
      let subproblem = recursion(amt - coin);
      if (subproblem !== Infinity) {
        res = Math.min(res, 1 + subproblem);
      }
    }

    return res;
  }

  ans = recursion(amount);
  return ans === Infinity ? -1 : ans;
}

function coinChangeTD(coins: number[], amount: number): number {
  let memo = new Map();

  function recursion(amt: number): number {
    if (amt === 0) return 0;
    if (amt < 0) return Infinity;
    if (memo.has(amt)) return memo.get(amt);

    let res = Infinity;

    for (let coin of coins) {
      let subproblem = recursion(amt - coin);
      if (subproblem !== Infinity) {
        res = Math.min(res, 1 + subproblem);
      }
    }

    memo.set(amt, res);
    return memo.get(amt);
  }

  const ans = recursion(amount);
  return ans === Infinity ? -1 : ans;
}

function coinChangeBU(coins: number[], amount: number): number {
  let n: number = coins.length;
  let dp: number[] = new Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 0; i < n; ++i) {
    let coin = coins[i];
    for (let j = coin; j <= amount; ++j) {
      dp[j] = Math.min(dp[j], dp[j - coin] + 1);
    }
  }

  return dp[amount];
}

let coins = [1, 2, 5];
let amount = 11;

console.log(coinChange(coins, amount));
