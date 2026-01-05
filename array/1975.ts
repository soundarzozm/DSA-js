// Maximum Matrix Sum
//
// Basically a row can have 1 -ve number or 0 -ve numbers. And we can bring the -ve sign to the smallest number in the row.
// If we have odd number of rows with -ve numbers, we are left with 1 -ve number. Else, all numbers can be +ve
// If there exists a 0, we can directly convert all numbers to +ve

function maxMatrixSum(matrix: number[][]): number {
  let total = 0;
  let hasZero = false;
  let globalMin = Number.MAX_VALUE;
  let localMin = Number.MAX_VALUE;
  let negatives = 0;

  for (let row of matrix) {
    let negs = 0;
    localMin = Math.abs(row[0]);

    for (let num of row) {
      let cur = Math.abs(num);
      total += cur;

      if (num < 0) negs++;
      localMin = Math.min(localMin, cur);
    }

    if (negs % 2 !== 0) negatives++;

    globalMin = Math.min(globalMin, localMin);
  }

  if (hasZero) return total;

  if (negatives % 2 === 0) return total;
  return total - globalMin * 2;
}

const matrix = [
  [10, -6, -6, -8],
  [-3, -7, -8, -9],
  [-4, -8, -5, -8],
  [-9, -9, -6, -8],
];
console.log(maxMatrixSum(matrix));
