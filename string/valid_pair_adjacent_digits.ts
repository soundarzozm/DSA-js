function findValidPair(s: string): string {
  let hashMap = new Map();
  let ans = ""

  for (let i = 0; i < s.length; i++) {
    hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1)
  }

  console.log(hashMap)

  for (let i = 0; i < s.length - 1; i++) {
      if (s[i] != s[i+1]) {
        if (hashMap.get(s[i]) === Number(s[i]) && hashMap.get(s[i+1]) === Number(s[i+1])) {
          ans = s[i] + s[i+1]
          return ans
        }
      }
  }
  return ans
}

console.log(findValidPair("2523533"))