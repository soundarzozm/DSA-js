// 3567. Minimum Absolute Difference in Sliding Submatrix

function minAbsDiff(grid: number[][], k: number): number[][] {
  const ans = [];
  const k2 = k * k;

  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i <= m - k; i++) {
    const row = [];
    for (let j = 0; j <= n - k; j++) {
      const arr = [];
      for (let r = i; r < i + k; r++) {
        for (let c = j; c < j + k; c++) {
          arr.push(grid[r][c]);
        }
      }
      let minDiff = Number.MAX_VALUE;
      arr.sort((a, b) => a - b);
      for (let p = 1; p < k2; p++) {
        if (arr[p] !== arr[p - 1])
          minDiff = Math.min(minDiff, arr[p] - arr[p - 1]);
      }
      if (minDiff === Number.MAX_VALUE) minDiff = 0;
      row.push(minDiff);
    }
    ans.push(row);
  }

  return ans;
}

const grid = [
    [1, -2, 3],
    [2, 3, 5],
  ],
  k = 2;
console.log(minAbsDiff(grid, k));
