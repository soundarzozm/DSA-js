export class UndirectedGraph {
  adjacencyList: Map<number | string, Array<number | string>>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(key: number | string) {
    this.adjacencyList.set(key, []);
  }

  addEdge(key1: number | string, key2: number | string) {
    this.adjacencyList.get(key1)?.push(key2);
    this.adjacencyList.get(key2)?.push(key1);
  }

  getAdjacencyList() {
    return this.adjacencyList
  }
}

// let airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM";
// let routes = [
//     ["PHX", "LAX"],
//     ["PHX", "JFK"],
//     ["JFK", "OKC"],
//     ["JFK", "HEL"],
//     ["JFK", "LOS"],
//     ["MEX", "LAX"],
//     ["MEX", "BKK"],
//     ["MEX", "LIM"],
//     ["MEX", "EZE"],
//     ["LIM", "BKK"],
// ];

// let airportsArray = airports.split(" ");

// let graph = new UndirectedGraph();
// airportsArray.forEach((airport) => graph.addNode(airport));
// routes.forEach((route) => {
//     graph.addEdge(route[0], route[1]);
// });

// console.log(graph.adjacencyList);
