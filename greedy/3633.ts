// 3633. Earliest Finish Time for Land and Water Rides I

function earliestFinishTime(
  landStartTime: number[],
  landDuration: number[],
  waterStartTime: number[],
  waterDuration: number[],
): number {
  let m = landStartTime.length;
  let n = waterStartTime.length;

  let ans = Number.MAX_VALUE;

  // Max(finish1, start2) + duration2
  // Minimise this value

  // Land ride first
  let quickestLandRide = Number.MAX_VALUE;

  for (let i = 0; i < m; i++) {
    quickestLandRide = Math.min(
      quickestLandRide,
      landStartTime[i] + landDuration[i],
    );
  }

  for (let j = 0; j < n; j++) {
    ans = Math.min(
      ans,
      Math.max(quickestLandRide, waterStartTime[j]) + waterDuration[j],
    );
  }

  // Water ride first
  let quickestWaterRide = Number.MAX_VALUE;

  for (let i = 0; i < n; i++) {
    quickestWaterRide = Math.min(
      quickestWaterRide,
      waterStartTime[i] + waterDuration[i],
    );
  }

  for (let j = 0; j < m; j++) {
    ans = Math.min(
      ans,
      Math.max(quickestWaterRide, landStartTime[j]) + landDuration[j],
    );
  }

  return ans;
}

const landStartTime = [2, 8],
  landDuration = [4, 1],
  waterStartTime = [6],
  waterDuration = [3];
console.log(
  earliestFinishTime(
    landStartTime,
    landDuration,
    waterStartTime,
    waterDuration,
  ),
);
