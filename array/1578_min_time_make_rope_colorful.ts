function minCost(colors: string, neededTime: number[]): number {
  let lp = 0;
  let rp = 0;

  let ans = 0;

  while (rp < colors.length) {
    let max = 0;
    let sum = 0;
    while (colors[lp] === colors[rp]) {
      max = Math.max(max, neededTime[rp]);
      sum += neededTime[rp];
      rp++;
    }
    ans += sum - max;
    lp = rp;
  }

  return ans;
}

let colors = "abaac",
  neededTime = [1, 2, 3, 4, 5];
console.log(minCost(colors, neededTime));
