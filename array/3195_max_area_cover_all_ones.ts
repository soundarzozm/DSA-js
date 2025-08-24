function minimumArea(grid: number[][]): number {
  let rows = grid.length;
  let cols = grid[0].length;

  let topLeft = [rows - 1, cols - 1];
  let bottomRight = [0, 0];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        topLeft[0] = Math.min(topLeft[0], i);
        topLeft[1] = Math.min(topLeft[1], j);

        bottomRight[0] = Math.max(bottomRight[0], i);
        bottomRight[1] = Math.max(bottomRight[1], j);
      }
    }
  }

  let length = bottomRight[1] - topLeft[1] + 1;
  let breadth = bottomRight[0] - topLeft[0] + 1;

  return length * breadth;
}

let grid = [
  [0, 1, 0],
  [1, 0, 1],
];
console.log(minimumArea(grid));
