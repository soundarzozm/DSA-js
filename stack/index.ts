export class Stack {
  array: Array<any>;
  constructor(arr: Array<any>) {
    this.array = arr;
  }

  push(element: any) {
    return this.array.push(element);
  }

  pop() {
    return this.array.pop();
  }
}
