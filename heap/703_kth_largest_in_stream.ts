class KthLargest {
  private minHeap: MinPriorityQueue<number> = new MinPriorityQueue();
  private k: number;

  constructor(k: number, nums: number[]) {
    this.k = k;
    for (let num of nums) this.add(num);
  }

  add(val: number): number {
    if (this.minHeap.size() === this.k && val <= this.minHeap.front())
      return this.minHeap.front();
    this.minHeap.enqueue(val);

    while (this.minHeap.size() > this.k) this.minHeap.dequeue();

    return this.minHeap.front();
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
