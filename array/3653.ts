const MOD = 1e9 + 7;

function xorAfterQueries(nums: number[], queries: number[][]): number {
  for (let query of queries) {
    let idx = query[0];
    while (idx <= query[1]) {
      nums[idx] = (nums[idx] * query[3]) % MOD;
      idx += query[2];
    }
  }

  let ans = nums[0];
  for (let i = 1; i < nums.length; i++) {
    ans = ans ^ nums[i];
  }

  return ans;
}

const nums = [2, 3, 1, 5, 4],
  queries = [
    [1, 4, 2, 3],
    [0, 2, 1, 2],
  ];

console.log(xorAfterQueries(nums, queries));
