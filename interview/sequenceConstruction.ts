function sequenceConstruction(n: number, target: number): number[] {
  let maxSum = Math.floor((n * (n + 1)) / 2);
  let minSum = -1 * maxSum;

  if (target < minSum || target > maxSum) return [];

  const changeNeeded = (target - minSum) / 2;

  // dp[i][j] will be true if a sum of j can be formed using a subset of {1...i}
  const dp: boolean[][] = Array.from({ length: n + 1 }, () =>
    new Array(changeNeeded + 1).fill(false),
  );

  // Base case: sum of 0 is always possible with an empty set
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  // Fill the DP table
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= changeNeeded; j++) {
      // Option 1: Exclude the current number i
      dp[i][j] = dp[i - 1][j];

      // Option 2: Include the current number i (if it fits)
      if (j >= i) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - i];
      }
    }
  }

  // If changeNeeded cannot be formed, it's impossible
  if (!dp[n][changeNeeded]) {
    return [];
  }

  const sequence: number[] = [];
  let currentWeight = changeNeeded;

  // Trace backwards from n down to 1
  for (let i = n; i >= 1; i--) {
    // Preference: If the sum can be achieved WITHOUT flipping 'i',
    // keep 'i' negative to preserve a smaller element for the sorted array.
    if (
      currentWeight >= i &&
      dp[i - 1][currentWeight - i] &&
      !dp[i - 1][currentWeight]
    ) {
      sequence.push(i); // Flip to positive
      currentWeight -= i;
    } else if (currentWeight >= i && !dp[i - 1][currentWeight]) {
      // Forced to flip because we cannot make the sum without 'i'
      sequence.push(i);
      currentWeight -= i;
    } else {
      // Keep it negative
      sequence.push(-i);
    }
  }

  // Sort to obtain the final lexicographically smallest sequence
  return sequence.sort((a, b) => a - b);
}

let n = 4;
let target = -2;
console.log(sequenceConstruction(n, target));
