function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

  // nums1 is the smaller array

  let n1: number = nums1.length;
  let n2: number = nums2.length;
  let n: number = n1 + n2;

  // half length should be bigger if odd
  // n = 10 half = 5.5 -> 5
  // n = 11 half = 6
  let half: number = Math.floor((n + 1) / 2);

  // Do binary search in smaller array checking how many elements to take
  // Works with linear search also but takes more time, it's that simple
  let left: number = 0;
  let right: number = n1;

  let mid1: number;
  let mid2: number;

  // This is not required. Added just for TS warnings
  let ans: number = 0;

  // Do binary search
  while (left <= right) {
    mid1 = Math.floor((left + right) / 2);
    mid2 = half - mid1;

    // l1: biggest element taken from nums1 on left
    // l2: biggest element taken from nums2 on left
    // r1: smallest element taken from nums1 on right
    // r2: smallest element taken from nums2 on right
    // [1, 3, 5] x [7]
    //        [] x [2, 4]
    //
    // [1, 3] x [5, 7]
    //    [2] x [4]
    let l1 = -Infinity;
    let l2 = -Infinity;
    let r1 = Infinity;
    let r2 = Infinity;

    // Update values of the above 4 pointers based on current scenario
    if (mid1 < n1) r1 = nums1[mid1];
    if (mid2 < n2) r2 = nums2[mid2];
    if (mid1 - 1 >= 0) l1 = nums1[mid1 - 1];
    if (mid2 - 1 >= 0) l2 = nums2[mid2 - 1];

    // If this cross comparison is true, we got our answer
    if (l1 <= r2 && l2 <= r1) {
      // If odd, just return end of left, which is Max(l1, l2) since we don't know the order of left
      if (n % 2 === 1) ans = Math.max(l1, l2);
      // If even, take mean of end of left and start of right, hence Max(l1, l2) and Min(r1, r2)
      else ans = (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      break;
    }

    // If l1 > r2, we need to reduce number of nums1 elements considered for left side
    else if (l1 > r2) right = mid1 - 1;
    // If l2 > r1, we need to increase number of nums1 elements considered for left side
    else left = mid1 + 1;
  }

  return ans;
}

let nums1 = [1, 3, 5, 7];
let nums2 = [2, 4];

console.log(findMedianSortedArrays(nums1, nums2));
