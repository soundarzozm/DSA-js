function punishmentNumber(n: number): number {
  let ans = 0;

  for (let i = 0; i <= n; i++) {
    if (checkNumber(0, 0, i, (i * i).toString())) {
      ans += i * i;
    }
  }

  return ans;
}

function checkNumber(i: number, curr: number, target: number, string: string): boolean {
  if (i == string.length && curr == target) return true;

  for (let j = i; j < string.length; j++) {
    if (checkNumber(j + 1, curr + Number(string.substring(i, j + 1)), target, string)) return true;
  }

  return false;
}
