function longestSubarray(arr: number[], k: number): number {
  let hashMap = new Map();
  let res = 0;
  let prefixSum = 0;

  for (let i = 0; i < arr.length; ++i) {
    prefixSum += arr[i];

    // Check if the entire prefix sums to k
    if (prefixSum === k) res = i + 1;
    // If prefixSum - k exists in the map then there exist such
    // subarray from (index of previous prefix + 1) to i.
    else if (hashMap.has(prefixSum - k)) res = Math.max(res, i - hashMap.get(prefixSum - k));

    // Store only first occurrence index of prefSum
    if (!hashMap.has(prefixSum)) hashMap.set(prefixSum, i);

    console.log(hashMap)
    console.log(res)
  }

  return res;
}

console.log(longestSubarray([1, -1, 5, -2, 3], 3)); // 4