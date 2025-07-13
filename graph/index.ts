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

    visited.add(source);

    while (queue.length > 0) {
      let currentNode: [T, number] = queue.shift();
      traversal.push(currentNode);

      let connectedNodes: Array<[T, number]> =
        this.adjacencyList.get(currentNode[0]) || [];

      for (let node of connectedNodes) {
        if (!visited.has(node[0])) {
          if (searchTerm && node[0] === searchTerm) {
            traversal.push(node);
            return traversal;
          }
          queue.push(node);
          visited.add(node[0]);
        }
      }
    }

    return traversal;
  }

  dfs(source: T, searchTerm?: T) {
    if (!this.adjacencyList.has(source)) return "Source node not found!";

    let visited: Set<T> = new Set();
    let traversal: Array<[T, number]> = [];

    const traverse = (node: [T, number]) => {
      if (searchTerm && visited.has(searchTerm)) return;

      visited.add(node[0]);
      traversal.push(node);

      let connectedNodes = this.adjacencyList.get(node[0]);
      for (let i = 0; i < connectedNodes.length; ++i) {
        if (!visited.has(connectedNodes[i][0])) traverse(connectedNodes[i]);
      }
    };

    traverse([source, 0]);

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
console.log("BFS", graph.bfs("PHX"));
console.log("DFS", graph.dfs("PHX", "JFK"));
