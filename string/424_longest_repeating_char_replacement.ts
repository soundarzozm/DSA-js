function characterReplacement(s: string, k: number): number {
  let left = 0;
  let right = 0;

  let ans = 0;
  let maxFrequency = 0;

  let letters = new Array(26).fill(0);

  while (right < s.length) {
    let rightIdx = s.charCodeAt(right) - 65;
    letters[rightIdx] += 1;

    maxFrequency = Math.max(maxFrequency, letters[rightIdx]);

    if (right - left + 1 - maxFrequency > k) {
      let leftIdx = s.charCodeAt(left) - 65;
      letters[leftIdx] -= 1;
      left += 1;
    }

    ans = Math.max(ans, right - left + 1);
    right += 1;
  }

  return ans;
}
