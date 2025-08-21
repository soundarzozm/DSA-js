// ways[i] =
// (if s[i] is valid) ways[i-1]
//  +
// (if s[i-1: i] is valid) ways[i-2]

function numDecodings(s: string): number {
  if (s[0] === "0") return 0;

  let n = s.length;

  function recursion(i: number): number {
    if (i < 0) return 1;
    if (i === 0) return s[0] !== "0" ? 1 : 0;

    let ways = 0;

    // single digit decode
    if (s[i] !== "0") {
      ways += recursion(i - 1);
    }

    // two digit decode
    let bigNumber = s.substring(i - 1, i + 1);
    if (s[i - 1] !== "0" && Number(bigNumber) <= 26) {
      ways += recursion(i - 2);
    }

    return ways;
  }

  return recursion(n - 1);
}

function numDecodingsTD(s: string): number {
  if (s[0] === "0") return 0;

  let n = s.length;
  let memo = new Map();

  function recursion(i: number): number {
    if (memo.has(i)) return memo.get(i);

    if (i < 0) return 1;
    if (i === 0) return s[0] !== "0" ? 1 : 0;

    let ways = 0;

    // single digit decode
    if (s[i] !== "0") {
      ways += recursion(i - 1);
    }

    // two digit decode
    let bigNumber = s.substring(i - 1, i + 1);
    if (s[i - 1] !== "0" && Number(bigNumber) <= 26) {
      ways += recursion(i - 2);
    }

    memo.set(i, ways);
    return memo.get(i);
  }

  return recursion(n - 1);
}

function numDecodingsBU(s: string): number {
  let n = s.length;
  if (n === 0 || s[0] === "0") return 0;

  let dp: number[] = new Array(n).fill(0);

  // base cases
  dp[0] = 1; // first char guaranteed not "0"

  for (let i = 1; i < n; i++) {
    // single digit decode (s[i])
    if (s[i] !== "0") {
      dp[i] += dp[i - 1];
    }

    // two digit decode (s[i-1..i])
    let bigNumber = s.substring(i - 1, i + 1);
    if (s[i - 1] !== "0" && Number(bigNumber) <= 26) {
      if (i >= 2) {
        dp[i] += dp[i - 2];
      } else {
        dp[i] += 1; // when i == 1, empty prefix counts as 1 way
      }
    }
  }

  return dp[n - 1];
}

// 223
// 2 22
//

// let s = "223";
let s = "2103";
console.log(numDecodings(s));
