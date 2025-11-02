function countAndSay(n: number): string {
  let string: string = "1";
  let array: [number, number][];
  for (let i = 0; i < n - 1; ++i) {
    array = stringToArray(string);
    string = arrayToString(array);
  }

  return string;
}

function stringToArray(s: string): [number, number][] {
  let n = s.length;
  let prev = 0;
  let cur = 0;
  let count = 0;

  let ans: Array<[number, number]> = [];

  while (cur < n) {
    while (cur < n && s[prev] === s[cur]) {
      cur++;
      count++;
    }
    let element: [number, number] = [count, Number(s[prev])];
    ans.push(element);

    prev = cur;
    count = 0;
  }

  return ans;
}

function arrayToString(nums: [number, number][]): string {
  let array = nums.map((num) => `${num[0]}${num[1]}`);
  return array.join("");
}
