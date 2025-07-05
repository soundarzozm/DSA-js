function subsets(nums: number[]): number[][] {
  let ans: number[][] = [];

  function backtrack(arr: number[], idx: number): void {
    ans.push([...arr]);

    for (let i = idx; i < nums.length; ++i) {
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
