function kClosest(points: number[][], k: number): number[][] {
  let ans = [];
  let pq = new MaxPriorityQueue({
    priority: (point) => point.distance,
  });

  for (let point of points) {
    pq.enqueue({
      index: point,
      distance: calculateDistance(point[0], point[1]),
    });
    while (pq.size() > k) {
      pq.dequeue();
    }
  }

  let i = 0;
  while (i < k) {
    ans.push(pq.dequeue().element.index);
    i += 1;
  }

  return ans;
}

function calculateDistance(x: number, y: number): number {
  return Math.pow(x, 2) + Math.pow(y, 2);
}
