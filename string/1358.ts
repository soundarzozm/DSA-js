// 1358. Number of Substrings Containing All Three Characters

function numberOfSubstrings(s: string): number {
  let ans = 0;
  let lastPos = [-1, -1, -1];

  let map = new Map([
    ["a", 0],
    ["b", 1],
    ["c", 2],
  ]);

  for (let i = 0; i < s.length; i++) {
    lastPos[map.get(s[i])] = i;

    const min = Math.min(...lastPos);

    if (min === -1) continue;

    ans += 1 + min;
  }

  return ans;
}

const s = "abcabc";
console.log(numberOfSubstrings(s));
