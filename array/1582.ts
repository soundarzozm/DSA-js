// 1582. Special Positions in a Binary Matrix

function numSpecial(mat: number[][]): number {
  const m = mat.length;
  const n = mat[0].length;

  let count = 0;

  let rows = new Array(m).fill(0);
  let cols = new Array(n).fill(0);

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (mat[row][col] === 1) {
        rows[row] += 1;
        cols[col] += 1;
      }
    }
  }

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (mat[row][col] === 1) {
        if (rows[row] === 1 && cols[col] === 1) count++;
      }
    }
  }

  return count;
}

const mat = [
  [1, 0, 0],
  [0, 0, 1],
  [1, 0, 0],
];
console.log(numSpecial(mat));
