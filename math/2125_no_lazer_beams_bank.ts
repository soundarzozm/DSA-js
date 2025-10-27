function numberOfBeams(bank: string[]): number {
  let prev = 0;
  let curr = 0;
  let ans = 0;

  for (let row = 0; row < bank.length; ++row) {
    curr = 0;
    for (let char of bank[row]) {
      if (char === "1") curr++;
    }
    ans += prev * curr;
    if (curr > 0) prev = curr;
  }

  return ans;
}

let bank = ["011001", "000000", "010100", "001000"];
console.log(numberOfBeams(bank));
