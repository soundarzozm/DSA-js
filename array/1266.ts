// Minimum Time Visiting All Points

function minTimeToVisitAllPoints(points: number[][]): number {
  let ans = 0;
  let prevPoint = points[0];

  for (let i = 1; i < points.length; i++) {
    let curPoint = points[i];
    ans += move(prevPoint[0], prevPoint[1], curPoint[0], curPoint[1]);

    prevPoint = curPoint;
  }

  return ans;
}

function move(oldX: number, oldY: number, newX: number, newY: number) {
  const dx = Math.abs(oldX - newX);
  const dy = Math.abs(oldY - newY);

  if (dx === dy) return dx;
  else if (dx > dy) return dy + (dx - dy);
  else return dx + (dy - dx);
}

const points = [
  [1, 1],
  [3, 4],
  [-1, 0],
];
console.log(minTimeToVisitAllPoints(points));
