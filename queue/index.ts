export class Queue {
  array: Array<any>;
  constructor(arr: Array<any>) {
    this.array = arr;
  }

  push(element: any) {
    return this.array.unshift(element);
  }

  pop() {
    return this.array.shift();
  }
}
