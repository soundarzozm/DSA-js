function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let stack = new Array();
  let map = new Map();
  let ans = new Array(nums1.length).fill(-1);

  for (let i = 0; i < nums2.length; ++i) {
    let cur = nums2[i];
    while (stack[stack.length - 1] < cur) {
      let top = stack.pop();
      map.set(top, nums2[i]);
    }
    stack.push(nums2[i]);
  }

  for (let i = 0; i < nums1.length; ++i) {
    if (map.has(nums1[i])) ans[i] = map.get(nums1[i]);
  }

  return ans;
}

let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];

console.log(nextGreaterElement(nums1, nums2));
