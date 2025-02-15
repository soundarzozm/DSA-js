function minOperations(nums: number[], k: number): number {
  let ans = 0;
  let minPq = new MinPriorityQueue();

  if (nums.length < 2) return ans;

  nums.forEach((num) => minPq.enqueue(num));

  while (minPq.size() >= 2 && minPq.front().element < k) {
    let num1 = minPq.dequeue().element;
    let num2 = minPq.dequeue().element;

    minPq.enqueue(num1 * 2 + num2);
    ans += 1;
  }

  return ans;
}
