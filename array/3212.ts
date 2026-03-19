// 3212. Count Submatrices With Equal Frequency of X and Y

function numberOfSubmatrices(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  let ans = 0;

  const newGrid = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      let curElement = [0, 0];
      if (grid[i][j] === "X") curElement = [1, 0];
      else if (grid[i][j] === "Y") curElement = [0, 1];

      row.push(curElement);
    }
    newGrid.push(row);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let xCount =
        newGrid[i][j][0] +
        (i > 0 ? newGrid[i - 1][j][0] : 0) +
        (j > 0 ? newGrid[i][j - 1][0] : 0) -
        (i > 0 && j > 0 ? newGrid[i - 1][j - 1][0] : 0);

      let yCount =
        newGrid[i][j][1] +
        (i > 0 ? newGrid[i - 1][j][1] : 0) +
        (j > 0 ? newGrid[i][j - 1][1] : 0) -
        (i > 0 && j > 0 ? newGrid[i - 1][j - 1][1] : 0);

      newGrid[i][j] = [xCount, yCount];

      if (xCount > 0 && xCount === yCount) ans++;
    }
  }

  return ans;
}

const grid = [
  ["X", "Y", "."],
  ["Y", ".", "."],
];
console.log(numberOfSubmatrices(grid));
