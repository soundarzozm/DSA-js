// f(n) = can array be partitioned till index n

function canPartition(nums: number[]): boolean {
  let n = nums.length;
  let totalSum = 0;
  for (let num of nums) totalSum += num;

  if (totalSum % 2 !== 0) return false;
  let targetSum = Math.floor(totalSum / 2);

  function recursion(idx: number, target: number): boolean {
    if (target === 0) return true;
    if (idx === 0) return false;

    let take = recursion(idx - 1, target - nums[idx]);
    let notTake = recursion(idx - 1, target);

    return take || notTake;
  }

  return recursion(n, targetSum);
}

function canPartitionTD(nums: number[]): boolean {
  let n = nums.length;
  let totalSum = 0;
  for (let num of nums) totalSum += num;

  if (totalSum % 2 !== 0) return false;
  let targetSum = Math.floor(totalSum / 2);

  const memo = new Map();

  function recursion(idx: number, target: number): boolean {
    let key = `${idx}.${target}`;
    if (target === 0) return true;
    if (idx === 0) return false;

    if (memo.has(key)) return memo.get(key);

    let take = recursion(idx - 1, target - nums[idx]);
    let notTake = recursion(idx - 1, target);

    memo.set(key, take || notTake);
    return memo.get(key);
  }

  return recursion(n, targetSum);
}

function canPartitionBU(nums: number[]): boolean {
  let n = nums.length;
  let totalSum = 0;
  for (let num of nums) totalSum += num;

  if (totalSum % 2 !== 0) return false;
  let targetSum = Math.floor(totalSum / 2);

  let dp = new Array(targetSum + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let s = targetSum; s >= num; s--) {
      dp[s] = dp[s] || dp[s - num];
    }
  }

  return dp[targetSum];
}

const nums = [1, 5, 11, 5];
console.log(canPartitionBU(nums));
