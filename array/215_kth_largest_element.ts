function findKthLargest(nums: number[], k: number): number {
  let mp = new MinPriorityQueue();

  for (let num of nums) {
    mp.enqueue(num);

    while (mp.size() > k) {
      mp.dequeue();
    }
  }

  return mp.front().element;
}
