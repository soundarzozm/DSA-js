function minOperations(s: string): number {
  let zeroFirst = 0;
  let oneFirst = 0;

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      if (s[i] === "1") zeroFirst++;
      else oneFirst++;
    } else {
      if (s[i] === "0") zeroFirst++;
      else oneFirst++;
    }
  }

  return Math.min(zeroFirst, oneFirst);
}

const s = "0100";
console.log(minOperations(s));
