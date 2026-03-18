// 3070. Count Submatrices with Top-Left Element and Sum Less Than k

function countSubmatrices(grid: number[][], k: number): number {
  if (grid[0][0] > k) return 0;

  const m = grid.length;
  const n = grid[0].length;

  let count = 1;

  const rowPrefixMatrix = [];
  const gridPrefixMatrix = [];
  for (let i = 0; i < m; i++) {
    rowPrefixMatrix.push([...grid[i]]);
    gridPrefixMatrix.push([...grid[i]]);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;

      if (j > 0) {
        rowPrefixMatrix[i][j] =
          rowPrefixMatrix[i][j] + rowPrefixMatrix[i][j - 1];
      }

      if (i === 0) {
        gridPrefixMatrix[i][j] = rowPrefixMatrix[i][j];
      } else {
        gridPrefixMatrix[i][j] =
          gridPrefixMatrix[i - 1][j] + rowPrefixMatrix[i][j];
      }

      if (gridPrefixMatrix[i][j] <= k) {
        count++;
      }
    }
  }

  return count;
}

const grid = [
    [7, 2, 9],
    [1, 5, 0],
    [2, 6, 6],
  ],
  k = 20;
console.log(countSubmatrices(grid, k));
