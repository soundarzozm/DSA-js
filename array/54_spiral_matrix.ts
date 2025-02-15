function spiralOrder(matrix: number[][]): number[] {
  let m = matrix.length;
  let n = matrix[0].length;

  let colStart = 0;
  let colEnd = n - 1;
  let rowStart = 0;
  let rowEnd = m - 1;

  let row = rowStart;
  let col = colStart;

  let ans: number[] = [];

  // Edge cases
  if (m == 1) return matrix[0];

  if (n == 1) {
    for (let i = 0; i < n; i++) {
      ans.push(matrix[i][0]);
    }
    return ans;
  }

  // Logic
  while (rowStart <= rowEnd && colStart <= colEnd) {
    while (col < colEnd) {
      ans.push(matrix[row][col]);
      col++;
    }
    rowStart += 1;
    console.log(ans);

    while (row < rowEnd) {
      ans.push(matrix[row][col]);
      row++;
    }
    colEnd -= 1;
    console.log(ans);

    while (col > colStart) {
      ans.push(matrix[row][col]);
      col--;
    }
    rowEnd -= 1;
    console.log(ans);

    while (row > rowStart) {
      ans.push(matrix[row][col]);
      row--;
    }
    colStart += 1;
    console.log(ans);
  }
  console.log(matrix[row][col]);

  return ans;
}

let input = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

console.log(spiralOrder(input));
