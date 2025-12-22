// Important:
// If [row][col] < [row+1][col] => set sorted[row] = true
// If [row][col] > [row+1][col] => have to delete. but if sorted[row] = true then ignore (previously already sorted so this col doesnt matter)
// If [row][col] == [row+1][col] => Do nothing (not sorted yet. later columns will decide)

function minDeletionSize(strs: string[]): number {
  let ROWS = strs.length;
  let COLS = strs[0].length;
  let ans = 0;

  const sorted: boolean[] = new Array(ROWS - 1).fill(false);

  for (let col = 0; col < COLS; col++) {
    // Step 1: check if this column causes a violation
    let bad = false;
    for (let i = 0; i < ROWS - 1; i++) {
      if (!sorted[i] && strs[i][col] > strs[i + 1][col]) {
        bad = true;
        break;
      }
    }

    // If bad, delete this column
    if (bad) {
      ans++;
      continue;
    }

    // Step 2: update sorted pairs if column is kept
    for (let i = 0; i < ROWS - 1; i++) {
      if (!sorted[i] && strs[i][col] < strs[i + 1][col]) {
        sorted[i] = true;
      }
    }
  }

  return ans;
}

const strs = ["xga", "xfb", "yfa"];
console.log(minDeletionSize(strs));
