function longestSubstring(s: string, k: number): number {
  let ans = 0;
  let set = new Set();
  for (let char of s) set.add(char);

  let maxUnique = set.size;

  for (let curUnique = 1; curUnique <= maxUnique; curUnique++) {
    let l = 0;
    let r = 0;
    let map = new Map();

    while (r <= s.length) {
      while (map.size > curUnique) {
        let val = map.get(s[l]);
        if (val === 1) map.delete(s[l]);
        else map.set(s[l], val - 1);
        l++;
      }

      if (isValid(map, k)) ans = Math.max(ans, r - l);

      if (!map.has(s[r])) map.set(s[r], 0);
      map.set(s[r], map.get(s[r]) + 1);
      r++;
    }
  }

  return ans;
}

function isValid(map: Map<string, number>, k: number) {
  for (let [_, value] of map) {
    if (value < k) return false;
  }

  return true;
}

let s = "aaabbb";
let k = 3;
console.log(longestSubstring(s, k));
