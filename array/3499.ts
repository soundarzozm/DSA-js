// 3499. Maximize Active Section with Trade I

function maxActiveSectionsAfterTrade(s: string): number {
  let ans = 0;
  let ones = 0;

  let arr = s.split("");
  arr.push("1");
  arr.unshift("1");

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] === "1") ones++;
  }

  const splits = [];

  let prev = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === prev) {
      count++;
    } else {
      splits.push([prev, count]);
      prev = arr[i];
      count = 1;
    }
  }

  splits.push(["1", count]);

  for (let i = 0; i < splits.length; i++) {
    if (splits[i][0] === "1" && i > 0 && i < splits.length - 1) {
      let delta = splits[i - 1][1] + splits[i + 1][1];
      ans = Math.max(ans, delta);
    }
  }

  return ans + ones;
}

const s = "1000100";
console.log(maxActiveSectionsAfterTrade(s));
