function maxFreeTime(
  eventTime: number,
  startTime: number[],
  endTime: number[],
): number {
  let now = 0;
  let ans = 0;

  let events: number[] = [];
  let gaps: number[] = [];

  for (let i = 0; i < startTime.length; ++i) {
    gaps.push(startTime[i] - now);
    events.push(endTime[i] - startTime[i]);
    now = endTime[i];
  }
  gaps.push(eventTime - now);

  let prefixMax: number[] = [];
  let suffixMax: number[] = [];
  let p = 0;
  let s = 0;

  for (let i = 0; i < gaps.length; ++i) {
    p = Math.max(p, gaps[i]);
    s = Math.max(s, gaps[gaps.length - i - 1]);
    prefixMax.push(p);
    suffixMax.push(s);
  }

  suffixMax.reverse();

  console.log(events);
  console.log(gaps);
  console.log(prefixMax);
  console.log(suffixMax);

  for (let i = 1; i < events.length - 1; ++i) {
    if (prefixMax[i - 1] >= events[i] || suffixMax[i + 2] >= events[i]) {
      ans = Math.max(ans, gaps[i] + events[i] + gaps[i + 1]);
    } else {
      ans = Math.max(ans, gaps[i] + gaps[i + 1]);
    }
  }

  return ans;
}

let eventTime = 10;
let startTime = [0, 3, 5, 9];
let endTime = [2, 4, 6, 10];

console.log(maxFreeTime(eventTime, startTime, endTime));
