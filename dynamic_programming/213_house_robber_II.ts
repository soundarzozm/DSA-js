function rob(nums: number[]): number {
  let n = nums.length;

  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let nums1 = nums.slice(0, n - 1);
  let nums2 = nums.slice(1, n);

  function recursion(i: number, nums: number[]): number {
    if (i < 0) return 0;
    return Math.max(nums[i] + recursion(i - 2, nums), recursion(i - 1, nums));
  }

  return Math.max(recursion(n - 2, nums1), recursion(n - 2, nums2));
}

function robTD(nums: number[]): number {
  let n = nums.length;
  let memo = new Map();

  let nums1 = nums.slice(0, n - 1);
  let nums2 = nums.slice(1, n);

  if (n === 0) return 0;
  if (n === 1) return nums[0];

  function recursion(i: number, nums: number[]): number {
    if (i < 0) return 0;

    if (!memo.has(i))
      memo.set(
        i,
        Math.max(nums[i] + recursion(i - 2, nums), recursion(i - 1, nums)),
      );

    return memo.get(i);
  }

  let res1 = recursion(n - 2, nums1);
  memo = new Map();
  let res2 = recursion(n - 2, nums2);

  return Math.max(res1, res2);
}

function robBU(nums: number[]): number {
  let n = nums.length;

  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let nums1 = nums.slice(0, n - 1);
  let nums2 = nums.slice(1, n);

  let dp1 = new Array(n - 1);
  let dp2 = new Array(n - 1);

  dp1[0] = nums1[0];
  dp1[1] = Math.max(nums1[0], nums1[1]);

  dp2[0] = nums2[0];
  dp2[1] = Math.max(nums2[0], nums2[1]);

  for (let i = 2; i < n - 1; ++i) {
    dp1[i] = Math.max(nums1[i] + dp1[i - 2], dp1[i - 1]);
    dp2[i] = Math.max(nums2[i] + dp2[i - 2], dp2[i - 1]);
  }

  return Math.max(dp1[n - 2], dp2[n - 2]);
}

let nums = [1, 2, 3, 1];
console.log(rob(nums));
