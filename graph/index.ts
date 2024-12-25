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

  bfs(start: number | string, value: number | string) {
    if (!this.adjacencyList.get(start)) return "Start node not found!";

    let queue = [start];
    let visited = new Set();
    let ans = [];

    while (queue.length > 0) {
      let currentNode = queue.shift();
      visited.add(currentNode);
      ans.push(currentNode);
      let connectedNodes = this.adjacencyList.get(currentNode);
      for (let i = 0; i < connectedNodes.length; i++) {
        if (connectedNodes[i] == value) {
          ans.push(connectedNodes[i]);
          return ans;
        }
        if (!visited.has(connectedNodes[i])) queue.push(connectedNodes[i]);
      }
    }

    return "Element not found!";
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
