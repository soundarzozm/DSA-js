function maxProfit(prices: number[]): number {
  let ans = 0;
  let buyPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    buyPrice = Math.min(buyPrice, prices[i]);
    ans = Math.max(ans, prices[i] - buyPrice);
  }

  return ans;
}

let prices: number[] = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
