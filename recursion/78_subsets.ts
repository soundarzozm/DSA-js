function subsets(nums: number[]): number[][] {
  let ans: number[][] = [];
  let n: number = nums.length;

  function backtrack(arr: number[], idx: number) {
    ans.push([...arr]);

    for (let i = idx; i < n; ++i) {
      arr.push(nums[i]);
      backtrack(arr, i + 1);
      arr.pop();
    }
  }

  backtrack([], 0);

  return ans;
}

let nums = [1, 2, 3];
console.log(subsets(nums));
