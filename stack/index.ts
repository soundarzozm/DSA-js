export class Stack<T> {
  array: Array<T>;
  constructor(arr?: Array<T>) {
    this.array = arr ? arr : [];
  }

  push(element: any) {
    return this.array.push(element);
  }

  pop() {
    return this.array.pop();
  }

  empty() {
    return this.array.length === 0;
  }

  top() {
    return this.array.slice(-1)[0];
  }

  size() {
    return this.array.length;
  }
}
