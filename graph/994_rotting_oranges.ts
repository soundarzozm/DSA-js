function orangesRotting(grid: number[][]): number {
  let ans = 0;
  let ROWS = grid.length;
  let COLS = grid[0].length;

  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let queue: Array<[number, number]> = [];

  // Get all the rotten oranges
  for (let row = 0; row < ROWS; ++row) {
    for (let col = 0; col < COLS; ++col) {
      if (grid[row][col] === 2) queue.push([row, col]);
    }
  }

  while (queue.length > 0) {
    let nextLevel: Array<[number, number]> = [];

    for (let rotten of queue) {
      let [x, y] = rotten;

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
          nextLevel.push([nx, ny]);
          grid[nx][ny] = 2;
        }
      }
    }

    queue = nextLevel;
    ans++;
  }

  // Check for fresh oranges after all are rotten
  for (let row = 0; row < ROWS; ++row) {
    for (let col = 0; col < COLS; ++col) {
      if (grid[row][col] === 1) return -1;
    }
  }

  return ans;
}

let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
console.log(orangesRotting(grid));
