function countSubstrings(s: string): number {
  let n = s.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    // odd length case
    let start = i - 1;
    let end = i + 1;
    ans++;

    while (start >= 0 && end < n && s[start] === s[end]) {
      start--;
      end++;
      ans++;
    }

    // even length case
    if (i === n - 1 || s[i] !== s[i + 1]) continue;

    start = i - 1;
    end = i + 2;
    ans++;

    while (start >= 0 && end < n && s[start] === s[end]) {
      start--;
      end++;
      ans++;
    }
  }

  return ans;
}

let s = "aaa";
console.log(countSubstrings(s));
