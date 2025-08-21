function longestPalindrome(s: string): string {
  let n = s.length;
  let ans = "";
  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    // odd length case
    let start = i - 1;
    let end = i + 1;
    let len = 1;

    while (start >= 0 && end < n && s[start] === s[end]) {
      start--;
      end++;
      len += 2;
    }

    if (len > maxLen) {
      maxLen = len;
      ans = s.substring(start + 1, end);
    }

    // even length case
    if (i === n - 1 || s[i] !== s[i + 1]) continue;

    start = i - 1;
    end = i + 2;
    len = 2;

    while (start >= 0 && end < n && s[start] === s[end]) {
      start--;
      end++;
      len += 2;
    }

    if (len > maxLen) {
      maxLen = len;
      ans = s.substring(start + 1, end);
    }
  }

  return ans;
}

let s = "ccc";
console.log(longestPalindrome(s));
