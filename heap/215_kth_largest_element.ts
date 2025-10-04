function findKthLargest(nums: number[], k: number): number {
  let heap: MinPriorityQueue<number> = new MinPriorityQueue();

  for (let num of nums) {
    heap.enqueue(num);
    while (heap.size() > k) heap.dequeue();
  }

  return heap.front();
}
