function checkInclusion(s1: string, s2: string): boolean {
  let s1Letters = new Array(26).fill(0);
  let s2Letters = new Array(26).fill(0);

  for (let char of s1) s1Letters[char.charCodeAt(0) - 97] += 1;
  for (let i = 0; i < s1.length; ++i) s2Letters[s2.charCodeAt(i) - 97] += 1;

  let left = 0;
  let right = s1.length - 1;

  while (right < s2.length) {
    if (compareArrays(s1Letters, s2Letters)) return true;

    right += 1;
    s2Letters[s2.charCodeAt(right) - 97] += 1;
    s2Letters[s2.charCodeAt(left) - 97] -= 1;
    left += 1;
  }

  return false;
}

function compareArrays(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

let s1 = "ab";
let s2 = "eidbaooo";

console.log(checkInclusion(s1, s2));
