function findTargetSumWays(nums: number[], target: number): number {
  const n = nums.length;

  function recursion(amt: number, idx: number): number {
    if (idx < 0) {
      return amt === 0 ? 1 : 0;
    }

    return (
      recursion(amt - nums[idx], idx - 1) + recursion(amt + nums[idx], idx - 1)
    );
  }

  return recursion(target, n - 1);
}

function findTargetSumWaysTD(nums: number[], target: number): number {
  const n = nums.length;
  const memo = new Map();

  function recursion(amt: number, idx: number): number {
    const key = `${amt}.${idx}`;
    if (memo.has(key)) return memo.get(key);

    if (idx < 0) {
      return amt === 0 ? 1 : 0;
    }

    memo.set(
      key,
      recursion(amt - nums[idx], idx - 1) + recursion(amt + nums[idx], idx - 1),
    );

    return memo.get(key);
  }

  return recursion(target, n - 1);
}

const nums = [1, 1, 1, 1, 1];
const target = 3;
console.log(findTargetSumWays(nums, target));
