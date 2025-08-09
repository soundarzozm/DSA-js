function islandsAndTreasure(grid: number[][]): void {
  let ROWS = grid.length;
  let COLS = grid[0].length;

  let LAND = 2147483647;
  let DIRS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let visited = new Array();
  for (let i = 0; i < ROWS; ++i) visited.push(new Array(COLS).fill(0));

  let queue: [number, number][] = [];

  for (let row = 0; row < ROWS; ++row) {
    for (let col = 0; col < COLS; ++col) {
      if (grid[row][col] === 0) queue.push([row, col]);
    }
  }

  let level = 1;

  while (queue.length > 0) {
    let cur: [number, number][] = [];

    for (let node of queue) {
      let [x, y] = node;

      visited[x][y] = 1;

      for (let dir of DIRS) {
        let nx = x + dir[0];
        let ny = y + dir[1];

        if (
          nx < ROWS &&
          nx >= 0 &&
          ny < COLS &&
          ny >= 0 &&
          grid[nx][ny] === LAND
        ) {
          if (!visited[nx][ny]) {
            cur.push([nx, ny]);
            grid[nx][ny] = level;
          }
        }
      }
    }

    level++;
    queue = cur;
  }
}

let grid = [
  [2147483647, 2147483647],
  [2147483647, 2147483647],
  [2147483647, 0],
];

islandsAndTreasure(grid);

console.log(grid);
