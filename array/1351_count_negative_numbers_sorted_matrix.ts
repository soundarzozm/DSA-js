function countNegatives(grid: number[][]): number {
  let ROWS = grid.length;
  let COLS = grid[0].length;

  let total = 0;

  let row = 0;

  for (let col = COLS - 1; col >= 0; col--) {
    while (row < ROWS && grid[row][col] >= 0) row++;
    total += ROWS - row;

    if (row >= ROWS) break;
  }

  return total;
}

const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
console.log(countNegatives(grid));
