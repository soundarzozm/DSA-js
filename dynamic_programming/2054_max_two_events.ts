// event -> [startTime, endTime, value]
// f(n) = max value achieved at time n

function maxTwoEvents(events: number[][]): number {
  let maxTime = 0;

  for (let event of events) {
    maxTime = Math.max(maxTime, event[1]);
  }

  function recursion(time: number, count: number): number {
    if (time <= 0) return 0;
    if (count === 2) return 0;

    let maxValue = 0;

    for (let event of events) {
      if (event[1] < time) {
        maxValue = Math.max(
          maxValue,
          event[2] + recursion(event[0], count + 1),
        );
      }
    }

    return maxValue;
  }

  return recursion(maxTime + 1, 0);
}

function maxTwoEventsBU(events: number[][]): number {
  events.sort((a, b) => a[1] - b[1]);
  const n = events.length;

  // dp[i][k] = max value using first i events with k events selected
  const dp = Array.from({ length: n + 1 }, () => Array(3).fill(0));

  // Extract end times for binary search
  const ends = events.map((e) => e[1]);

  // Binary search: last event ending before `start`
  function lastNonOverlapping(start: number): number {
    let l = 0,
      r = n - 1,
      ans = -1;
    while (l <= r) {
      const mid = (l + r) >> 1;
      if (ends[mid] < start) {
        ans = mid;
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return ans + 1; // +1 because dp is 1-indexed
  }

  for (let i = 1; i <= n; i++) {
    const [start, _, value] = events[i - 1];
    const prev = lastNonOverlapping(start);

    for (let k = 0; k <= 2; k++) {
      // Skip event i
      dp[i][k] = dp[i - 1][k];

      // Take event i
      if (k > 0) {
        dp[i][k] = Math.max(dp[i][k], dp[prev][k - 1] + value);
      }
    }
  }

  return Math.max(dp[n][0], dp[n][1], dp[n][2]);
}

const events = [
  [10, 83, 53],
  [63, 87, 45],
  [97, 100, 32],
  [51, 61, 16],
];
console.log(maxTwoEvents(events));
