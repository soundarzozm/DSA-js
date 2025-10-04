function largestTriangleArea(points: number[][]): number {
  let ans = 0;
  let n = points.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        let [x1, y1] = points[i];
        let [x2, y2] = points[j];
        let [x3, y3] = points[k];
        // shoelace formula
        let area =
          0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
        ans = Math.max(ans, area);
      }
    }
  }

  return ans;
}

let points = [
  [1, 0],
  [0, 0],
  [0, 1],
];
console.log(largestTriangleArea(points));
