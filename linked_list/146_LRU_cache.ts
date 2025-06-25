class DLLNode {
  key: number;
  val: number;
  prev: DLLNode | null;
  next: DLLNode | null;

  constructor(
    key: number,
    value: number,
    prev: DLLNode | null = null,
    next: DLLNode | null = null,
  ) {
    this.key = key;
    this.val = value;
    this.prev = prev;
    this.next = next;
  }
}

class LRUCache {
  capacity: number;
  store: Map<number, DLLNode>;
  head: DLLNode | null;
  tail: DLLNode | null;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.store = new Map<number, DLLNode>();

    this.head = new DLLNode(0, 0);
    this.tail = new DLLNode(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    if (!this.store.has(key)) return -1;

    const node: DLLNode = this.store.get(key);
    this.moveToHead(node);
    return node.val;
  }

  put(key: number, value: number): void {
    if (this.store.has(key)) {
      const node = this.store.get(key);
      node.val = value;
      this.moveToHead(node);
    } else {
      const node = new DLLNode(key, value);
      if (this.store.size === this.capacity) this.removeLastNode();
      this.store.set(key, node);
      this.addToHead(node);
    }
  }

  moveToHead(node: DLLNode): void {
    this.removeNode(node);
    this.addToHead(node);
  }

  addToHead(node: DLLNode): void {
    node.next = this.head.next;
    this.head.next.prev = node;

    this.head.next = node;
    node.prev = this.head;
  }

  removeNode(node: DLLNode): void {
    const prev = node.prev;
    const next = node.next;

    prev.next = next;
    next.prev = prev;
  }

  removeLastNode(): void {
    const node = this.tail.prev;
    const newLastNode = node.prev;

    newLastNode.next = this.tail;
    this.tail.prev = newLastNode;

    this.store.delete(node.key);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
