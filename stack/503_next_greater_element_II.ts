function nextGreaterElements(nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array<number>(n).fill(-1);
  const stack: number[] = [];

  for (let i = 0; i < 2 * n; ++i) {
    const num = nums[i % n];

    while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
      const index = stack.pop()!;
      ans[index] = num;
    }

    if (i < n) {
      stack.push(i);
    }
  }

  return ans;
}

let nums = [1, 2, 3, 4, 3];
console.log(nextGreaterElements(nums));
