function getDescentPeriods(prices: number[]): number {
  let n = prices.length;
  let comp = 0;
  let ans = 0;

  let lp = 0;
  let rp = 1;

  if (prices.length <= 1) return prices.length;

  while (lp < n && rp < n) {
    if (prices[lp] - prices[rp] === 1) {
      while (rp < n && prices[rp - 1] - prices[rp] === 1) {
        rp++;
      }
      let k = rp - lp;
      comp += k;
      ans += Math.floor((k * (k + 1)) / 2);

      lp = rp;

      continue;
    } else {
      lp = rp;
      rp++;
    }
  }

  ans += n - comp;

  return ans;
}
