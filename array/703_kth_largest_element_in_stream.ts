class KthLargest {
  private pq = new MinPriorityQueue();
  constructor(private k: number, nums: number[]) {
    for (let num of nums) {
      this.add(num);
    }
  }

  add(val: number): number {
    this.pq.enqueue(val);

    while (this.pq.size() > this.k) {
      this.pq.dequeue();
    }

    return this.pq.front().element;
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
