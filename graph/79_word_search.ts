function exist(board: string[][], word: string): boolean {
  let ROWS = board.length;
  let COLS = board[0].length;

  let n = word.length;
  let ans = false;

  let DIRS = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  let visited: number[][] = [];
  for (let i = 0; i < ROWS; ++i) visited.push(new Array(COLS).fill(0));

  function backtrack(idx: number, x: number, y: number) {
    if (idx === n - 1 && board[x][y] === word[idx]) {
      ans = true;
      return ans;
    }

    if (word[idx] !== board[x][y]) {
      return ans;
    }

    for (let dir of DIRS) {
      let nx = x + dir[0];
      let ny = y + dir[1];

      if (
        nx >= 0 &&
        nx < ROWS &&
        ny >= 0 &&
        ny < COLS &&
        visited[nx][ny] === 0 &&
        !ans
      ) {
        visited[nx][ny] = 1;
        backtrack(idx + 1, nx, ny);
        visited[nx][ny] = 0;
      }
    }

    return ans;
  }

  for (let i = 0; i < ROWS; ++i) {
    for (let j = 0; j < COLS; ++j) {
      if (board[i][j] === word[0] && !ans) {
        visited[i][j] = 1;
        ans = backtrack(0, i, j);
        visited[i][j] = 0;
      }
    }
  }

  return ans;
}

let board = [["a"]];
let word = "a";

console.log(exist(board, word));
