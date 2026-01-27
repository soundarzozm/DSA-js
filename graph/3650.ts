import { MinHeap } from "../heap/MinHeap";

function minCost(n: number, edges: number[][]): number {
  const graph = new Map<number, [number, number][]>();
  const distances: Record<number, number> = {};

  type HeapElement = {
    node: number;
    distance: number;
  };

  for (let i = 0; i < n; i++) {
    distances[i] = Infinity;
  }
  distances[0] = 0;

  for (const edge of edges) {
    const u = edge[0];
    const v = edge[1];
    const w = edge[2];

    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);

    let uEdges = graph.get(u);
    let vEdges = graph.get(v);

    uEdges.push([v, w]);
    vEdges.push([u, 2 * w]);

    graph.set(u, uEdges);
    graph.set(v, vEdges);
  }

  const minHeap = new MinHeap<HeapElement>((element) => element.distance);

  minHeap.insert({
    node: 0,
    distance: 0,
  });

  while (!minHeap.isEmpty()) {
    const cur = minHeap.extractRoot();
    const { node: currentNode, distance: currentDist } = cur;

    if (currentDist > distances[currentNode]) continue;

    const neighbors = graph.get(currentNode);

    if (!neighbors) continue;

    for (let neighbor of neighbors) {
      const distance = neighbor[1] + currentDist;
      const node = neighbor[0];

      if (distance < distances[node]) {
        distances[node] = distance;
        minHeap.insert({
          node,
          distance,
        });
      }
    }
  }

  return distances[n - 1] !== Infinity ? distances[n - 1] : -1;
}

const n = 4,
  edges = [
    [0, 1, 3],
    [3, 1, 1],
    [2, 3, 4],
    [0, 2, 2],
  ];

console.log(minCost(n, edges));
