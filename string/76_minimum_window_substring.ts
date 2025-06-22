function minWindow(s: string, t: string): string {
  let left = 0;
  let right = 0;

  let tArr = new Array(128).fill(0);
  let sArr = new Array(128).fill(0);

  let ans = [Number.MIN_VALUE, Number.MAX_VALUE];

  for (let i = 0; i < t.length; ++i) {
    tArr[t.charCodeAt(i)] += 1;
  }

  while (right < s.length) {
    sArr[s.charCodeAt(right)] += 1;
    right += 1;

    while (left < right && checkValidity(sArr, tArr)) {
      if (right - left < ans[1] - ans[0]) ans = [left, right];
      sArr[s.charCodeAt(left)] -= 1;
      left += 1;
    }
  }

  if (ans[0] === Number.MIN_VALUE) return "";

  return s.substring(ans[0], ans[1]);
}

function checkValidity(sArr: number[], tArr: number[]): boolean {
  if (sArr.length !== tArr.length) return false;

  for (let i = 0; i < sArr.length; i++) {
    if (tArr[i] > 0 && sArr[i] < tArr[i]) return false;
  }

  return true;
}

let s = "ADOBECODEBANC";
let t = "ABC";

console.log(minWindow(s, t));
