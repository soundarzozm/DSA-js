// 3532. Path Existence Queries in a Graph I

function pathExistenceQueries(
  n: number,
  nums: number[],
  maxDiff: number,
  queries: number[][],
): boolean[] {
  const components = new Array(n).fill(0);
  const ans = [];

  let counter = 0;

  for (let i = 1; i < n; i++) {
    if (nums[i] - nums[i - 1] > maxDiff) counter++;
    components[i] = counter;
  }

  for (let query of queries) {
    const u = query[0];
    const v = query[1];

    if (components[u] === components[v]) ans.push(true);
    else ans.push(false);
  }

  return ans;
}

const n = 4,
  nums = [2, 5, 6, 8],
  maxDiff = 2,
  queries = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ];

console.log(pathExistenceQueries(n, nums, maxDiff, queries));
