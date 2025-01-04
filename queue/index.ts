export class Queue<T> {
  array: Array<T>;
  constructor(arr?: Array<T>) {
    this.array = arr ? arr : [];
  }

  push(element: any) {
    return this.array.unshift(element);
  }

  pop() {
    return this.array.pop();
  }

  empty() {
    return this.array.length === 0;
  }

  peek() {
    return this.array.slice(-1)[0];
  }

  size() {
    return this.array.length;
  }
}
