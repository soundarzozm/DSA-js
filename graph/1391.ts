// 1391. Check if There is a Valid Path in a Grid

// Up: -1
// Down: +1
// Left: -1
// Right: +1
const DIRS = [
  [
    [1, 0],
    [-1, 0],
  ],
  [
    [0, 1],
    [0, -1],
  ],
  [
    [-1, 0],
    [0, 1],
  ],
  [
    [1, 0],
    [0, 1],
  ],
  [
    [-1, 0],
    [0, -1],
  ],
  [
    [1, 0],
    [0, -1],
  ],
];

function hasValidPath(grid: number[][]): boolean {
  const m = grid.length;
  const n = grid[0].length;

  let isValid = false;

  const visited = Array.from({ length: m }, () => new Array(n).fill(false));

  function dfs(x: number, y: number) {
    if (x === m - 1 && y === n - 1) {
      isValid = true;
      return;
    }

    visited[x][y] = true;

    for (let dir of DIRS[grid[x][y] - 1]) {
      const dx = x + dir[0];
      const dy = y + dir[1];

      console.log(dx, dy);

      if (dx >= 0 && dx < m && dy >= 0 && dy < n && !visited[dx][dy]) {
        dfs(dx, dy);
      }
    }
  }

  dfs(0, 0);

  console.log(visited);

  return isValid;
}

const grid = [
  [1, 2, 1],
  [1, 2, 1],
];
console.log(hasValidPath(grid));
