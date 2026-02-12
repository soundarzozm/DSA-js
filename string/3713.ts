function longestBalanced(s: string): number {
  let map = new Map();
  const n = s.length;
  let ans = 1;

  for (let i = 0; i < n - 1; i++) {
    map = new Map();
    map.set(s[i], 1);
    for (let j = i + 1; j < n; j++) {
      if (!map.has(s[j])) map.set(s[j], 0);
      map.set(s[j], map.get(s[j]) + 1);

      if (isMapBalanced(map)) {
        ans = Math.max(ans, j - i + 1);
      }
    }
  }

  return ans;
}

function isMapBalanced(map: Map<string, number>) {
  const values = Array.from(map.values());
  const n = values.length;

  for (let i = 1; i < n; i++) {
    if (values[i - 1] !== values[i]) return false;
  }

  return true;
}

const s = "zzabccy";
console.log(longestBalanced(s));
