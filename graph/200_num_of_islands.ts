function numIslands(grid: string[][]): number {
  let count = 0;
  let ROWS = grid.length;
  let COLS = grid[0].length;

  let dirs = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  function bfs(i: number, j: number): void {
    let queue = [[i, j]];
    grid[i][j] = "2";

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
          grid[nx][ny] === "1"
        ) {
          queue.push([nx, ny]);
          grid[nx][ny] = "2";
        }
      }
    }
  }

  for (let i = 0; i < ROWS; ++i) {
    for (let j = 0; j < COLS; ++j) {
      if (grid[i][j] === "1") {
        bfs(i, j);
        ++count;
      }
    }
  }

  return count;
}

let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid));
