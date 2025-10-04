function lastStoneWeight(stones: number[]): number {
  let maxHeap: MaxPriorityQueue<number> = new MaxPriorityQueue();

  for (let stone of stones) maxHeap.enqueue(stone);

  while (maxHeap.size() > 1) {
    let y = maxHeap.dequeue();
    let x = maxHeap.dequeue();

    if (x != y) maxHeap.enqueue(y - x);
  }

  if (maxHeap.size() === 0) return 0;
  return maxHeap.front();
}
