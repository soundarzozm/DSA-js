function coinChange(coins: number[], amount: number): number {
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
