function totalMoney(n: number): number {
  let week = 0;
  let ans = 0;

  for (let day = 1; day <= n; ++day) {
    let moni = week + (day % 7);
    ans += moni;
    if (day % 7 === 0) {
      ans = ans + 7;
      week++;
    }
  }

  return ans;
}

let n = 20;
console.log(totalMoney(n));
