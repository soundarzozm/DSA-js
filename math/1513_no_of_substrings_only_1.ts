function numSub(s: string): number {
  let ans = 0;
  let cur = 0;
  let count = 0;

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "1") cur++;
    else {
      count = Math.floor((cur * (cur + 1)) / 2);
      ans += count;
      cur = 0;
    }
  }

  // If group exists unprocessed
  if (cur > 0) {
    count = Math.floor((cur * (cur + 1)) / 2);
    ans += count;
  }

  return ans % 1000000007;
}

let s = "0110111";
console.log(numSub(s));
