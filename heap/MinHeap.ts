/**
 * MinHeap implementation in TypeScript.
 * Supports generic types that can be compared using a key selector function.
 */
export class MinHeap<T> {
  private heap: T[];
  private keySelector: (item: T) => number;

  constructor(keySelector: (item: T) => number, initial?: T[]) {
    this.heap = [];
    this.keySelector = keySelector;
    if (initial && initial.length > 0) {
      for (const item of initial) {
        this.insert(item);
      }
    }
  }

  public size(): number {
    return this.heap.length;
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }

  public peek(): T | undefined {
    return this.heap[0];
  }

  public insert(value: T): void {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  public extractMin(): T | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop() as T;
    this.bubbleDown(0);
    return min;
  }

  private bubbleUp(index: number): void {
    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      if (
        this.keySelector(this.heap[index]) <
        this.keySelector(this.heap[parentIdx])
      ) {
        this.swap(index, parentIdx);
        index = parentIdx;
      } else {
        break;
      }
    }
  }

  private bubbleDown(index: number): void {
    const length = this.heap.length;
    while (true) {
      let leftIdx = 2 * index + 1;
      let rightIdx = 2 * index + 2;
      let smallest = index;

      if (
        leftIdx < length &&
        this.keySelector(this.heap[leftIdx]) <
          this.keySelector(this.heap[smallest])
      ) {
        smallest = leftIdx;
      }
      if (
        rightIdx < length &&
        this.keySelector(this.heap[rightIdx]) <
          this.keySelector(this.heap[smallest])
      ) {
        smallest = rightIdx;
      }
      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  public toArray(): T[] {
    return [...this.heap];
  }
}
