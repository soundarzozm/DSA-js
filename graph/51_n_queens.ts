function solveNQueens(n: number): string[][] {
  let ans = [];

  // incDiag - r + c is constant
  // decDiag - r - c is constant
  let incDiag = new Set();
  let decDiag = new Set();
  let cols = new Set();

  function backtrack(i, j, count) {
    if (count === n) {
    }

    let curID = i + j;
    let curDD = i - j;

    if (incDiag.has(curID) || decDiag.has(curDD) || cols.has(j)) return false;
  }

  return ans;
}

let n = 4;
console.log(solveNQueens(n));
