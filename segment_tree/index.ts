export default class SegmentTree {
  private treeSum: number[];
  private treeMax: number[];
  private treeMin: number[];
  private n: number;

  constructor(data: number[]) {
    this.n = data.length;
    const treeSize = 4 * this.n;

    this.treeSum = new Array(treeSize).fill(0);
    this.treeMax = new Array(treeSize).fill(-Infinity);
    this.treeMin = new Array(treeSize).fill(Infinity);

    if (this.n > 0) {
      this.build(data, 0, 0, this.n - 1);
    }
  }

  private getLeftChild(index: number): number {
    return 2 * index + 1;
  }
  private getRightChild(index: number): number {
    return 2 * index + 2;
  }

  private build(
    data: number[],
    treeIndex: number,
    left: number,
    right: number,
  ): void {
    if (left === right) {
      this.treeSum[treeIndex] = data[left];
      this.treeMax[treeIndex] = data[left];
      this.treeMin[treeIndex] = data[left];
      return;
    }

    const mid = Math.floor(left + (right - left) / 2);
    const leftChild = this.getLeftChild(treeIndex);
    const rightChild = this.getRightChild(treeIndex);

    this.build(data, leftChild, left, mid);
    this.build(data, rightChild, mid + 1, right);

    this.treeSum[treeIndex] =
      this.treeSum[leftChild] + this.treeSum[rightChild];
    this.treeMax[treeIndex] = Math.max(
      this.treeMax[leftChild],
      this.treeMax[rightChild],
    );
    this.treeMin[treeIndex] = Math.min(
      this.treeMin[leftChild],
      this.treeMin[rightChild],
    );
  }

  /**
   * Range Sum Query
   * Time Complexity: O(log n)
   */
  public querySum(queryLeft: number, queryRight: number): number {
    this.validateRange(queryLeft, queryRight);
    return this.querySumRecursive(0, 0, this.n - 1, queryLeft, queryRight);
  }

  private querySumRecursive(
    treeIndex: number,
    left: number,
    right: number,
    queryLeft: number,
    queryRight: number,
  ): number {
    if (queryLeft <= left && right <= queryRight)
      return this.treeSum[treeIndex];
    if (right < queryLeft || left > queryRight) return 0; // Identity element for addition

    const mid = Math.floor(left + (right - left) / 2);
    return (
      this.querySumRecursive(
        this.getLeftChild(treeIndex),
        left,
        mid,
        queryLeft,
        queryRight,
      ) +
      this.querySumRecursive(
        this.getRightChild(treeIndex),
        mid + 1,
        right,
        queryLeft,
        queryRight,
      )
    );
  }

  /**
   * Range Maximum Query
   * Time Complexity: O(log n)
   */
  public queryMax(queryLeft: number, queryRight: number): number {
    this.validateRange(queryLeft, queryRight);
    return this.queryMaxRecursive(0, 0, this.n - 1, queryLeft, queryRight);
  }

  private queryMaxRecursive(
    treeIndex: number,
    left: number,
    right: number,
    queryLeft: number,
    queryRight: number,
  ): number {
    if (queryLeft <= left && right <= queryRight)
      return this.treeMax[treeIndex];
    if (right < queryLeft || left > queryRight) return -Infinity; // Identity element for max

    const mid = Math.floor(left + (right - left) / 2);
    return Math.max(
      this.queryMaxRecursive(
        this.getLeftChild(treeIndex),
        left,
        mid,
        queryLeft,
        queryRight,
      ),
      this.queryMaxRecursive(
        this.getRightChild(treeIndex),
        mid + 1,
        right,
        queryLeft,
        queryRight,
      ),
    );
  }

  /**
   * Range Minimum Query
   * Time Complexity: O(log n)
   */
  public queryMin(queryLeft: number, queryRight: number): number {
    this.validateRange(queryLeft, queryRight);
    return this.queryMinRecursive(0, 0, this.n - 1, queryLeft, queryRight);
  }

  private queryMinRecursive(
    treeIndex: number,
    left: number,
    right: number,
    queryLeft: number,
    queryRight: number,
  ): number {
    if (queryLeft <= left && right <= queryRight)
      return this.treeMin[treeIndex];
    if (right < queryLeft || left > queryRight) return Infinity; // Identity element for min

    const mid = Math.floor(left + (right - left) / 2);
    return Math.min(
      this.queryMinRecursive(
        this.getLeftChild(treeIndex),
        left,
        mid,
        queryLeft,
        queryRight,
      ),
      this.queryMinRecursive(
        this.getRightChild(treeIndex),
        mid + 1,
        right,
        queryLeft,
        queryRight,
      ),
    );
  }

  /**
   * Point Update
   * Time Complexity: O(log n)
   */
  public update(dataIndex: number, newValue: number): void {
    if (dataIndex < 0 || dataIndex >= this.n)
      throw new Error("Index out of bounds");
    this.updateRecursive(0, 0, this.n - 1, dataIndex, newValue);
  }

  private updateRecursive(
    treeIndex: number,
    left: number,
    right: number,
    dataIndex: number,
    newValue: number,
  ): void {
    if (left === right) {
      this.treeSum[treeIndex] = newValue;
      this.treeMax[treeIndex] = newValue;
      this.treeMin[treeIndex] = newValue;
      return;
    }

    const mid = Math.floor(left + (right - left) / 2);
    const leftChild = this.getLeftChild(treeIndex);
    const rightChild = this.getRightChild(treeIndex);

    if (dataIndex <= mid) {
      this.updateRecursive(leftChild, left, mid, dataIndex, newValue);
    } else {
      this.updateRecursive(rightChild, mid + 1, right, dataIndex, newValue);
    }

    this.treeSum[treeIndex] =
      this.treeSum[leftChild] + this.treeSum[rightChild];
    this.treeMax[treeIndex] = Math.max(
      this.treeMax[leftChild],
      this.treeMax[rightChild],
    );
    this.treeMin[treeIndex] = Math.min(
      this.treeMin[leftChild],
      this.treeMin[rightChild],
    );
  }

  private validateRange(queryLeft: number, queryRight: number): void {
    if (queryLeft < 0 || queryRight >= this.n || queryLeft > queryRight) {
      throw new Error("Invalid query range");
    }
  }
}
