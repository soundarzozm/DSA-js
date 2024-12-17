class Solution {
  findUnion(arr1, arr2) {
    let p1 = null;
    let c1 = 0;
    let p2 = null;
    let c2 = 0;
    let ans = [];

    while (c1 < arr1.length && c2 < arr2.length) {
      if (arr1[c1] < arr2[c2]) {
        ans.push(arr1[c1]);
        p1 = c1;
        while (arr1[c1] == arr1[p1] && c1 < arr1.length) c1 += 1;
      } else if (arr1[c1] > arr2[c2]) {
        ans.push(arr2[c2]);
        p2 = c2;
        while (arr2[c2] == arr2[p2] && c2 < arr2.length) c2 += 1;
      } else {
        ans.push(arr1[c1]);
        p1 = c1;
        p2 = c2;
        while (arr1[c1] == arr1[p1] && c1 < arr1.length) c1 += 1;
        while (arr2[c2] == arr2[p2] && c2 < arr2.length) c2 += 1;
      }
    }

    while (c1 < arr1.length) {
      ans.push(arr1[c1]);
      p1 = c1;
      while (arr1[c1] == arr1[p1] && c1 < arr1.length) c1 += 1;
    }
    while (c2 < arr2.length) {
      ans.push(arr2[c2]);
      p2 = c2;
      while (arr2[c2] == arr2[p2] && c2 < arr2.length) c2 += 1;
    }

    return ans;
  }
}

const solution = new Solution();
const arr1 = [-8, -3, -3, -2, 0, 1, 2, 2, 6];
const arr2 = [-9, -9, 0];
console.log(solution.findUnion(arr1, arr2));
