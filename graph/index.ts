export type AdjacencyList<T> = Map<T, Array<[T, number]>>;

export class UndirectedGraph<T> {
  adjacencyList: AdjacencyList<T>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(key: T) {
    this.adjacencyList.set(key, []);
  }

  addEdge(key1: T, key2: T, weight?: number) {
    this.adjacencyList.get(key1)?.push([key2, weight || 0]);
    this.adjacencyList.get(key2)?.push([key1, weight || 0]);
  }

  getAdjacencyList() {
    return this.adjacencyList;
  }

  bfs(source: T, searchTerm?: T) {
    if (!this.adjacencyList.has(source)) return "Source node not found!";

    let visited: Set<T> = new Set();
    let queue: Array<[T, number]> = [[source, 0]];
    let traversal: Array<[T, number]> = [];

    while (queue.length > 0) {
      let currentNode: [T, number] = queue.shift();
      visited.add(currentNode[0]);
      traversal.push(currentNode);

      let connectedNodes: Array<[T, number]> = this.adjacencyList.get(
        currentNode[0],
      );

      for (let node of connectedNodes) {
        if (searchTerm && node[0] === searchTerm) {
          traversal.push(node);
          return traversal;
        }

        if (!visited.has(node[0])) queue.push(node);
      }
    }

    return traversal;
  }
}

let airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM";
let routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

let airportsArray = airports.split(" ");

let graph = new UndirectedGraph<string>();
airportsArray.forEach((airport) => graph.addNode(airport));
routes.forEach((route) => {
  graph.addEdge(route[0], route[1]);
});

// console.log(graph.adjacencyList);
console.log(graph.bfs("PHX", "bruh"));
