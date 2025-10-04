type PriorityQueueType = {
  distance: number;
  point: number[];
};

function kClosest(points: number[][], k: number): number[][] {
  let heap: PriorityQueue<PriorityQueueType> = new PriorityQueue((a, b) => {
    return b.distance - a.distance;
  });

  for (let point of points) {
    let distance = calculateDistance(point[0], point[1]);
    heap.enqueue({
      distance,
      point,
    });

    while (heap.size() > k) heap.dequeue();
  }

  let ans = [];

  for (let element of heap.toArray()) {
    ans.push(element.point);
  }

  return ans;
}

function calculateDistance(x: number, y: number): number {
  return Math.sqrt(x * x + y * y);
}
