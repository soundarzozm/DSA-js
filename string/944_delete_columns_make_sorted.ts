function minDeletionSize(strs: string[]): number {
  let ans = 0;

  for (let col = 0; col < strs[0].length; col++) {
    for (let row = 1; row < strs.length; row++) {
      if (strs[row][col].charCodeAt(0) < strs[row - 1][col].charCodeAt(0)) {
        ans++;
        break;
      }
    }
  }

  return ans;
}

let strs = ["cba", "daf", "ghi"];
console.log(minDeletionSize(strs));
