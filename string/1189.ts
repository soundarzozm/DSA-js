// 1189. Maximum Number of Balloons

function maxNumberOfBalloons(text: string): number {
  let map = new Map([
    ["b", 0],
    ["a", 0],
    ["l", 0],
    ["o", 0],
    ["n", 0],
  ]);

  for (let char of text) {
    if (map.has(char)) map.set(char, map.get(char) + 1);
  }

  let ans = Number.MAX_VALUE;

  for (let [key, value] of map) {
    if (key === "l" || key === "o") {
      ans = Math.min(ans, Math.floor(map.get(key) / 2));
    } else {
      ans = Math.min(ans, map.get(key));
    }
  }

  return ans;
}

const text = "loonbalxballpoon";
console.log(maxNumberOfBalloons(text));
