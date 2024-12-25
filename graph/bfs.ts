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

console.log(graph.bfs("JFK", "BKK"));
