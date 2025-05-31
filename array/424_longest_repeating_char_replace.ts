function characterReplacement(s: string, k: number): number {
  let letters = new Array(26).fill(0);

  let left = 0;
  let right = 0;

  let ans = 0;
  let maxF = 0;

  while (right < s.length) {
    let idx = s.charCodeAt(right) - "A".charCodeAt(0);
    letters[idx] += 1;

    maxF = Math.max(maxF, letters[idx]);

    if (right - left + 1 - maxF > k) {
      letters[s.charCodeAt(left) - "A".charCodeAt(0)] -= 1;
      left += 1;
    }

    ans = Math.max(ans, right - left + 1);
    right += 1;
  }

  return ans;
}
