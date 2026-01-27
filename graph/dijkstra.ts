import { MinHeap } from "../heap/MinHeap";
import { UndirectedGraph } from "./index";

type HeapElement = { node: string; priority: number };

const dijkstra = (myGraph: UndirectedGraph<string>, source: string) => {
  const distances: Record<string, number> = {};

  const adjList = myGraph.getAdjacencyList();
  for (let key of adjList.keys()) {
    distances[key] = Infinity;
  }
  distances[source] = 0;

  const keySelector = (element: HeapElement) => element.priority;
  const minHeap = new MinHeap<HeapElement>(keySelector, [
    {
      node: source,
      priority: 0,
    },
  ]);

  while (!minHeap.isEmpty()) {
    const cur = minHeap.extractMin();
    const { node: currentNode, priority: currentDist } = cur;

    if (currentDist > distances[currentNode]) continue;

    const neighbors = adjList.get(currentNode);

    for (const neighbor of neighbors) {
      const node = neighbor[0];
      const dist = neighbor[1] + currentDist;

      if (distances[node] > dist) {
        distances[node] = dist;
        minHeap.insert({ node: node, priority: dist });
      }
    }
  }

  return distances;
};

const myGraph = new UndirectedGraph<string>();
myGraph.addNode("A");
myGraph.addNode("B");
myGraph.addNode("C");
myGraph.addNode("D");
myGraph.addEdge("A", "B", 1);
myGraph.addEdge("A", "C", 4);
myGraph.addEdge("B", "C", 2);
myGraph.addEdge("B", "D", 5);
myGraph.addEdge("C", "D", 1);

console.log(dijkstra(myGraph, "A"));
