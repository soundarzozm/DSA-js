// f(n) = is it possible to build string upto index n

function wordBreak(s: string, wordDict: string[]): boolean {
  const n = s.length;

  function recursion(idx: number): boolean {
    if (idx === 0) return true;

    let possible = false;

    for (let word of wordDict) {
      if (
        idx - word.length >= 0 &&
        s.substring(idx - word.length, idx) === word
      ) {
        possible = recursion(idx - word.length);
      }

      if (possible) return possible;
    }

    return possible;
  }

  return recursion(n);
}

function wordBreakTD(s: string, wordDict: string[]): boolean {
  const n = s.length;
  const memo = new Map();

  function recursion(idx: number): boolean {
    if (idx === 0) return true;
    if (memo.has(idx)) return memo.get(idx);

    let possible = false;

    for (let word of wordDict) {
      if (
        idx - word.length >= 0 &&
        s.substring(idx - word.length, idx) === word
      ) {
        possible = recursion(idx - word.length);
      }

      if (possible) return possible;
    }

    memo.set(idx, possible);
    return memo.get(idx);
  }

  return recursion(n);
}

function wordBreakBU(s: string, wordDict: string[]): boolean {
  const n = s.length;
  const dp = new Array(n + 1).fill(false);

  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      for (let word of wordDict) {
        if (dp[j] && s.substring(j, i) === word) {
          dp[i] = true;
          break;
        }
      }
    }
  }

  return dp[n];
}

const s = "catsandog",
  wordDict = ["cats", "dog", "sand", "and", "cat"];

console.log(wordBreak(s, wordDict));
