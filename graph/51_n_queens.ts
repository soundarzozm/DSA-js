function solveNQueens(n: number): string[][] {
  let ans: Array<Array<string>> = [];

  // incDiag - r + c is constant
  // decDiag - r - c is constant
  let incDiag = new Set();
  let decDiag = new Set();
  let cols = new Set();

  // [    0      1      2      3
  // 0 [(0,0), (0,1), (0,2), (0,3)]
  // 1 [(1,0), (1,1), (1,2), (1,3)]
  // 2 [(2,0), (2,1), (2,2), (2,3)]
  // 3 [(3,0), (3,1), (3,2), (3,3)]
  // ]

  let board: string[][] = [];
  for (let i = 0; i < n; ++i) {
    let row = new Array(n).fill(".");
    board.push(row);
  }

  function backtrack(row: number) {
    if (row === n) {
      let buff: any[] = [...board];
      for (let i = 0; i < n; ++i) {
        buff[i] = buff[i].join("");
      }
      ans.push(buff);
    }

    for (let col = 0; col < n; ++col) {
      if (cols.has(col) || incDiag.has(row + col) || decDiag.has(row - col))
        continue;

      board[row][col] = "Q";
      cols.add(col);
      incDiag.add(row + col);
      decDiag.add(row - col);

      backtrack(row + 1);

      board[row][col] = ".";
      cols.delete(col);
      incDiag.delete(row + col);
      decDiag.delete(row - col);
    }
  }

  backtrack(0);

  return ans;
}

let n = 5;
console.log(solveNQueens(n));
