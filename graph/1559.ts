// 1559. Detect Cycles in 2D Grid

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

function containsCycle(grid: string[][]): boolean {
  let hasCycle = false;

  const m = grid.length;
  const n = grid[0].length;

  const visited = Array.from({ length: m }, () => new Array(n).fill(false));

  function dfs(x: number, y: number, px: number, py: number, curr: string) {
    if (hasCycle) return;
    visited[x][y] = true;

    for (let dir of DIRS) {
      const nx = x + dir[0];
      const ny = y + dir[1];

      if (nx >= 0 && ny >= 0 && nx < m && ny < n) {
        if (grid[nx][ny] !== curr) continue;

        if (nx === px && ny === py) continue;

        if (visited[nx][ny] === true) {
          hasCycle = true;
          return;
        }

        dfs(nx, ny, x, y, curr);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) dfs(i, j, i, j, grid[i][j]);
    }
  }

  return hasCycle;
}

const grid = [
  ["a", "b", "b"],
  ["b", "z", "b"],
  ["b", "b", "a"],
];

console.log(containsCycle(grid));
