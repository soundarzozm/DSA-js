// 1344. Angle Between Hands of a Clock

function angleClock(hour: number, minutes: number): number {
  let htheta = (hour / 12) * 360;
  let mtheta = (minutes / 60) * 360;

  htheta += (minutes / 60) * 30;

  let ans = Math.abs(htheta - mtheta);
  return ans > 180 ? 360 - ans : ans;
}

const hour = 12,
  minutes = 30;
console.log(angleClock(hour, minutes));
