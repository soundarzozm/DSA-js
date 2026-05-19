function getCommon(nums1: number[], nums2: number[]): number {
  let p1 = 0;
  let p2 = 0;

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) return nums1[p1];
    else if (nums1[p1] < nums2[p2]) p1++;
    else p2++;
  }

  return -1;
}

const nums1 = [1, 2, 3, 6];
const nums2 = [2, 3, 4, 5];
console.log(getCommon(nums1, nums2));
