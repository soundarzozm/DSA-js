export class LLNode<T> {
  value: T;
  next: LLNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  printList() {
    let result = "";
    let current = this;

    while (current.next) {
      result += current.value;
      if (current.next) {
        result += " -> ";
      }
      current = current.next;
    }

    result += current.value;
    console.log(result);
  }
}

export class LL<T> {
  head: LLNode<T>;
  constructor(nodeList: Array<T>) {
    this.head = new LLNode(nodeList[0]);

    let currentNode = this.head;

    for (let i = 1; i < nodeList.length; i++) {
      currentNode.next = new LLNode(nodeList[i]);
      currentNode = currentNode.next;
    }
  }

  printList() {
    let result = "";
    let current = this.head;

    while (current.next) {
      result += current.value;
      if (current.next) {
        result += " -> ";
      }
      current = current.next;
    }

    result += current.value;
    console.log(result);
  }
}

// let myLl = new LL([1, 2, 3, 4, 5]);
// myLl.printList();
