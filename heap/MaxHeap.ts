/**
 * MaxHeap implementation in TypeScript.
 * Supports generic types that can be compared using the provided comparator.
 */
export class MaxHeap<T> {
  private heap: T[];
  private keySelector: (item: T) => any;

  constructor(keySelector?: (item: T) => any) {
    this.heap = [];
    // Default key selector is the identity function (for numbers, strings, etc.)
    this.keySelector = keySelector || ((item: T) => item);
  }

  public size(): number {
    return this.heap.length;
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  public peek(): T | undefined {
    return this.heap[0];
  }

  public push(value: T): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  public pop(): T | undefined {
    if (this.isEmpty()) return undefined;
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0 && end !== undefined) {
      this.heap[0] = end;
      this.heapifyDown();
    }
    return max;
  }

  private compare(a: T, b: T): number {
    const keyA = this.keySelector(a);
    const keyB = this.keySelector(b);
    if (keyA > keyB) return 1;
    if (keyA < keyB) return -1;
    return 0;
  }

  private heapifyUp(): void {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.compare(this.heap[idx], this.heap[parentIdx]) > 0) {
        [this.heap[idx], this.heap[parentIdx]] = [
          this.heap[parentIdx],
          this.heap[idx],
        ];
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  private heapifyDown(): void {
    let idx = 0;
    const length = this.heap.length;
    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let largest = idx;

      if (
        left < length &&
        this.compare(this.heap[left], this.heap[largest]) > 0
      ) {
        largest = left;
      }
      if (
        right < length &&
        this.compare(this.heap[right], this.heap[largest]) > 0
      ) {
        largest = right;
      }
      if (largest !== idx) {
        [this.heap[idx], this.heap[largest]] = [
          this.heap[largest],
          this.heap[idx],
        ];
        idx = largest;
      } else {
        break;
      }
    }
  }
}
