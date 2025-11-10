function minOperations(nums: number[]): number {
  let stack = [];
  let n = nums.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    if (stack.length === 0) {
      if (nums[i] > 0) stack.push(nums[i]);
      continue;
    }

    let top = stack[stack.length - 1];

    while (stack.length > 0 && nums[i] < top) {
      stack.pop();
      top = stack[stack.length - 1];

      ans++;
    }

    if (top !== nums[i] && nums[i] !== 0) stack.push(nums[i]);
  }

  return ans + stack.length;
}

let nums = [1, 2, 1, 2, 1, 2];
console.log(minOperations(nums));
