// Maximum Square Area by Removing Fences From a Field

const MOD = 1e9 + 7;

function maximizeSquareArea(
  m: number,
  n: number,
  hFences: number[],
  vFences: number[],
): number {
  let ans = -1;
  let set = new Set();

  hFences.unshift(1);
  hFences.push(m);

  vFences.unshift(1);
  vFences.push(n);

  for (let i = 0; i < hFences.length - 1; i++) {
    for (let j = i + 1; j < hFences.length; j++) {
      set.add(Math.abs(hFences[i] - hFences[j]));
    }
  }

  for (let i = 0; i < vFences.length - 1; i++) {
    for (let j = i + 1; j < vFences.length; j++) {
      let diff = Math.abs(vFences[i] - vFences[j]);
      if (set.has(diff)) ans = Math.max(ans, diff);
    }
  }

  if (ans !== -1) return Number((BigInt(ans) * BigInt(ans)) % BigInt(MOD));
  return ans;
}

const m = 4,
  n = 3,
  hFences = [2, 3],
  vFences = [2];

console.log(maximizeSquareArea(m, n, hFences, vFences));
