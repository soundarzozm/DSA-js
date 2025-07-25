let map = new Map();
map.set("2", "abc");
map.set("3", "def");
map.set("4", "ghi");
map.set("5", "jkl");
map.set("6", "mno");
map.set("7", "pqrs");
map.set("8", "tuv");
map.set("9", "wxyz");

function letterCombinations(digits: string): string[] {
  if (digits === "") return [];

  let ans: string[] = [];
  let cur: string[] = [];

  function backtrack(idx: number) {
    if (cur.length === digits.length) {
      ans.push(cur.join(""));
      return;
    }

    for (let i = idx; i < digits.length; ++i) {
      let button = map.get(digits[i]);

      for (let j = 0; j < button.length; ++j) {
        cur.push(button[j]);
        backtrack(i + 1);
        cur.pop();
      }
    }
  }

  backtrack(0);

  return ans;
}

let digits = "23";
console.log(letterCombinations(digits));
