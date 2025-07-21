/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  let ROWS = board.length;
  let COLS = board[0].length;

  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let visited = new Array();
  for (let i = 0; i < ROWS; ++i) visited.push(new Array(COLS).fill(0));

  function bfs(row, col) {
    let queue = [[row, col]];
    let region = [[row, col]];

    visited[row][col] = 1;
    let sur = true;

    while (queue.length > 0) {
      let [x, y] = queue.shift();

      for (let dir of dirs) {
        let nx = x + dir[0];
        let ny = y + dir[1];

        if (nx < 0 || nx >= ROWS || ny < 0 || ny >= COLS) {
          sur = false;
          continue;
        }

        if (board[nx][ny] === "O" && visited[nx][ny] === 0) {
          queue.push([nx, ny]);
          region.push([nx, ny]);
          visited[nx][ny] = 1;
        }
      }
    }

    if (sur) {
      for (let cell of region) board[cell[0]][cell[1]] = "X";
    }
  }

  for (let i = 0; i < ROWS; ++i) {
    for (let j = 0; j < COLS; ++j) {
      if (board[i][j] === "O" && visited[i][j] === 0) bfs(i, j);
    }
  }
}

let board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];
solve(board);
console.log(board);
