function maxProfit(prices: number[]): number {
  let ans = 0;
  let buyPrice = Number.MAX_VALUE;

  // Buying price should come before selling price
  // So as we iterate through the array (which is through time), we keep track of the minimum buying price and max profit till that day
  for (let i = 0; i < prices.length; i++) {
    buyPrice = Math.min(buyPrice, prices[i]);
    ans = Math.max(ans, prices[i] - buyPrice);
  }

  return ans;
}

let prices: number[] = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
