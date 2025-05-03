import { UndirectedGraph } from ".";

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

let graph = new UndirectedGraph();
airportsArray.forEach((airport) => graph.addNode(airport));
routes.forEach((route) => {
  graph.addEdge(route[0], route[1]);
});

export function dfs(source: number | string, graph: Map<number | string, Array<number | string>>, searchTerm?: number | string) {
  if (!graph.has(source)) return "Invalid starting node!"
  
  let visited: Set<number | string> = new Set()
  let ans: Array<number | string> = []
  let stack: Array<number | string> = [source]

  while (stack.length > 0) {
    let currentNode = stack.pop()
    visited.add(currentNode)
    ans.push(currentNode)
    let connectedNodes = graph.get(currentNode)

    for (let node of connectedNodes) {
      if (!visited.has(node)) stack.push(node)
    }
  }

  return ans
}

console.log(dfs("JFK", graph.getAdjacencyList()));
