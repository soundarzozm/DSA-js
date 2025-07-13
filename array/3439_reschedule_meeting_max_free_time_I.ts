function maxFreeTime(
  eventTime: number,
  k: number,
  startTime: number[],
  endTime: number[],
): number {
  let gaps: number[] = [];

  let i = 0;
  let prev = 0;

  let maxGap = 0;

  while (i < startTime.length) {
    gaps.push(startTime[i] - prev);
    prev = endTime[i];
    ++i;
  }

  gaps.push(eventTime - endTime[endTime.length - 1]);

  let l = 0;
  let r = 0;
  let gap = 0;

  while (r < gaps.length && r <= k) {
    gap += gaps[r];
    ++r;
  }

  maxGap = Math.max(maxGap, gap);

  while (r < gaps.length) {
    gap -= gaps[l];
    gap += gaps[r];

    maxGap = Math.max(maxGap, gap);

    ++l;
    ++r;
  }

  return maxGap;
}

let eventTime = 10;
let k = 1;
let startTime = [0, 2, 9];
let endTime = [1, 4, 10];

console.log(maxFreeTime(eventTime, k, startTime, endTime));
