function checkOnesSegment(s: string): boolean {
  const n = s.length;
  let i = 0;

  while (i < n && s[i] === "1") i++;

  while (i < n) {
    if (s[i] === "1") return false;
    i++;
  }

  return true;
}

const s = "1001";
console.log(checkOnesSegment(s));
