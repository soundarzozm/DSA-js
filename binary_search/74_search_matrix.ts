function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length;
  let n = matrix[0].length;

  // Find the row
  let left = 0;
  let right = m - 1;
  let middle: number = Math.floor((left + right) / 2);
  let row: number = left;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (matrix[middle][0] > target) {
      right = middle - 1;
    } else if (matrix[middle][0] < target) {
      row = middle;
      left = middle + 1;
    } else {
      return true;
    }
  }

  // Find the column
  left = 0;
  right = n - 1;
  middle = Math.floor((left + right) / 2);

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (matrix[row][middle] > target) {
      right = middle - 1;
    } else if (matrix[row][middle] < target) {
      left = middle + 1;
    } else {
      return true;
    }
  }

  return false;
}

let nums = [[1], [3]];
let target = 3;

console.log(searchMatrix(nums, target));
