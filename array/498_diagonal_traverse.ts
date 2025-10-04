function findDiagonalOrder(mat: number[][]): number[] {
  let ans: number[] = [];
  let rows = mat.length;
  let cols = mat[0].length;
  let row = 0,
    col = 0;
  let up = true;

  while (ans.length < rows * cols) {
    ans.push(mat[row][col]);
    if (up) {
      if (col === cols - 1) {
        row++;
        up = false;
      } else if (row === 0) {
        col++;
        up = false;
      } else {
        row--;
        col++;
      }
    } else {
      if (row === rows - 1) {
        col++;
        up = true;
      } else if (col === 0) {
        row++;
        up = true;
      } else {
        row++;
        col--;
      }
    }
  }
  return ans;
}

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(findDiagonalOrder(mat));
