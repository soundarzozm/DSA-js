function pacificAtlantic(heights: number[][]): number[][] {
  let ans: [number, number][] = [];

  let ROWS = heights.length;
  let COLS = heights[0].length;

  let pacVisited = new Array();
  for (let i = 0; i < ROWS; ++i) pacVisited.push(new Array(COLS).fill(0));

  let atlVisited = new Array();
  for (let i = 0; i < ROWS; ++i) atlVisited.push(new Array(COLS).fill(0));

  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function bfs(row: number, col: number, visited: number[]) {
    let queue = [[row, col]];
    visited[row][col] = 1;

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
          heights[nx][ny] >= heights[x][y] &&
          visited[nx][ny] === 0
        ) {
          queue.push([nx, ny]);
          visited[nx][ny] = 1;
        }
      }
    }
  }

  let row = 0;
  for (let col = 0; col < COLS; ++col) {
    if (pacVisited[row][col] !== 1) bfs(row, col, pacVisited);
  }

  let col = 0;
  for (let row = 0; row < ROWS; ++row) {
    if (pacVisited[row][col] !== 1) bfs(row, col, pacVisited);
  }

  row = ROWS - 1;
  for (let col = 0; col < COLS; ++col) {
    if (atlVisited[row][col] !== 1) bfs(row, col, atlVisited);
  }

  col = COLS - 1;
  for (let row = 0; row < ROWS; ++row) {
    if (atlVisited[row][col] !== 1) bfs(row, col, atlVisited);
  }

  for (let row = 0; row < ROWS; ++row) {
    for (let col = 0; col < COLS; ++col) {
      if (pacVisited[row][col] === 1 && atlVisited[row][col] === 1)
        ans.push([row, col]);
    }
  }

  return ans;
}

let heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
console.log(pacificAtlantic(heights));
