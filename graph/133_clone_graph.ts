class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(node: _Node | null): _Node | null {
  if (!node) return null;

  let map = new Map();
  map.set(node, new _Node(node.val));

  let queue = [node];

  while (queue.length > 0) {
    let cur = queue.shift();

    for (let nbr of cur.neighbors) {
      if (!map.has(nbr)) {
        map.set(nbr, new _Node(nbr.val));
        queue.push(nbr);
      }
    }
  }

  for (let [key, value] of map) {
    for (let nbr of key.neighbors) {
      value.neighbors.push(map.get(nbr));
    }
  }

  return map.get(node);
}
