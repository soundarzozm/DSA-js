const MOD = 1e9 + 7;

function numberOfWays(corridor: string): number {
  let n = corridor.length;
  let ans = 1;
  let indices = [];

  let count = 0;
  let start = 0;
  let end = 0;
  for (let i = 0; i < n; i++) {
    if (corridor[i] === "S") {
      count++;
      if (count % 2 === 0) {
        end = i;
        indices.push([start, end]);
      } else {
        start = i;
      }
    }
  }

  if (count % 2 !== 0) return 0;

  if (indices.length === 0) return 0;
  if (indices.length === 1) return 1;

  for (let i = 1; i < indices.length; i++) {
    let k = indices[i][0] - indices[i - 1][1];
    ans = (ans * k) % MOD;
  }

  return ans;
}
