function countUnguarded(
  m: number,
  n: number,
  guards: number[][],
  walls: number[][],
): number {
  let grid = [];
  for (let i = 0; i < m; ++i) {
    let row = new Array(n).fill(0);
    grid.push(row);
  }

  for (let guard of guards) grid[guard[0]][guard[1]] = 1;
  for (let wall of walls) grid[wall[0]][wall[1]] = 2;

  function simulate(row, col) {
    let i = row;
    let j = col;

    // left
    i = row;
    j = col - 1;
    while (j >= 0) {
      if (grid[i][j] !== 1 && grid[i][j] !== 2) {
        if (grid[i][j] === 0) grid[i][j] = 3;
        j--;
      } else {
        break;
      }
    }

    // right
    i = row;
    j = col + 1;
    while (j < n) {
      if (grid[i][j] !== 1 && grid[i][j] !== 2) {
        if (grid[i][j] === 0) grid[i][j] = 3;
        j++;
      } else {
        break;
      }
    }

    // up
    i = row - 1;
    j = col;
    while (i >= 0) {
      if (grid[i][j] !== 1 && grid[i][j] !== 2) {
        if (grid[i][j] === 0) grid[i][j] = 3;
        i--;
      } else {
        break;
      }
    }

    // down
    i = row + 1;
    j = col;
    while (i < m) {
      if (grid[i][j] !== 1 && grid[i][j] !== 2) {
        if (grid[i][j] === 0) grid[i][j] = 3;
        i++;
      } else {
        break;
      }
    }
  }

  let ans = 0;
  // let ans = m * n - (guards.length + walls.length)

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === 1) {
        simulate(i, j);
      }
    }
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === 0) ans++;
    }
  }

  return ans;
}
