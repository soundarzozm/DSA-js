function maxOperations(s: string): number {
  let n = s.length;
  let ans = 0;
  let ones = 0;

  if (s[0] === "1") ones = 1;

  for (let i = 1; i < n; i++) {
    if (i > 1 && s[i] === "1" && s[i - 1] === "0") {
      ans += ones;
    }

    if (s[i] === "1") ones++;
  }

  if (s[n - 1] === "0") ans += ones;

  return ans;
}

let s = "1001101";
console.log(maxOperations(s));
