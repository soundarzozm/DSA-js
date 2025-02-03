function lengthOfLongestSubstring(s: string): number {
  let len = s.length;
  if (len === 0 || len === 1) return len;

  let maxLen = 1;
  let currLen = 1;

  let start = 0;
  let end = 1;

  let hashSet = new Set();
  hashSet.add(s[start]);

  while (end < len) {
    if (hashSet.has(s[end])) {
      while (hashSet.has(s[end])) {
        hashSet.delete(s[start]);
        start += 1;
        currLen -= 1;
      }
      hashSet.add(s[end]);
      end += 1;
      currLen += 1;
    } else {
      hashSet.add(s[end]);
      currLen += 1;
      end += 1;
    }
    maxLen = Math.max(maxLen, currLen);
  }

  return maxLen;
}
