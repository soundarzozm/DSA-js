function maxAreaOfIsland(grid: number[][]): number {
  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let maxArea = 0;
  let ROWS = grid.length;
  let COLS = grid[0].length;

  for (let row = 0; row < ROWS; ++row) {
    for (let col = 0; col < COLS; ++col) {
      if (grid[row][col] === 1) bfs(row, col);
    }
  }

  function bfs(row: number, col: number) {
    let queue = [[row, col]];
    let area = 1;
    grid[row][col] = 2;

    while (queue.length > 0) {
      let [x, y] = queue.shift();

      for (let dir of dirs) {
        let nx = x + dir[0];
        let ny = y + dir[1];

        if (
          nx >= 0 &&
          nx < ROWS &&
          ny >= 0 &&
          ny < COLS &&
          grid[nx][ny] === 1
        ) {
          queue.push([nx, ny]);
          grid[nx][ny] = 2;
          area++;
        }
      }
    }

    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}

let grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
console.log(maxAreaOfIsland(grid));
