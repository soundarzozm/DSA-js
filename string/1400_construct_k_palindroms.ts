function canConstruct(s: string, k: number): boolean {
  if (s.length < k) return false
  let ans = false
  let oddLetters = 0

  let charCount = new Map()

  for (let i = 0; i < s.length; i++) {
    charCount.set(s[i], (charCount.get(s[i]) || 0) + 1)
  }

  charCount.forEach((value, key) => {
    if (value % 2 !== 0) oddLetters += 1
  })

  return oddLetters <= k
};
