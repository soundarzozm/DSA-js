// 1254. Number of Closed Islands

const DIRS = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

function closedIsland(grid: number[][]): number {
  let islands = 0;
  const m = grid.length;
  const n = grid[0].length;

  const visited = Array.from({ length: m }, () => Array(n).fill(0));

  function dfs(x: number, y: number): boolean {
    // If it hits the outer boundary, it's not a closed island
    if (x < 0 || x >= m || y < 0 || y >= n) {
      return false;
    }

    // If it's water (1) or already visited, it doesn't invalidate the current land
    if (grid[x][y] === 1 || visited[x][y] === 1) {
      return true;
    }

    visited[x][y] = 1;
    let isClosed = true;

    for (let DIR of DIRS) {
      let nx = x + DIR[0];
      let ny = y + DIR[1];

      // If any branch hits the boundary (returns false), the whole island is open
      if (!dfs(nx, ny)) {
        isClosed = false;
      }
    }

    return isClosed;
  }

  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (grid[i][j] === 0 && visited[i][j] === 0) {
        if (dfs(i, j)) {
          islands++;
        }
      }
    }
  }

  return islands;
}

const grid = [
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0],
];

console.log(closedIsland(grid));
