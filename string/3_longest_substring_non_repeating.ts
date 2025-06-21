function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let right = 0;
  let ans = 0;

  let set = new Set();

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      right += 1;
      ans = Math.max(ans, right - left);
    }

    while (left < right && set.has(s[right])) {
      set.delete(s[left]);
      left += 1;
    }
  }

  return ans;
}
