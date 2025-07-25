function countComponents(n: number, edges: number[][]): number {
  let count = 0;
  let adj = new Array();

  for (let i = 0; i < n; ++i) adj.push(new Set());

  for (let [u, v] of edges) {
    adj[u].add(v);
    adj[v].add(u);
  }

  let visited = new Set();

  function dfs(node: number) {
    if (visited.has(node)) return;

    visited.add(node);

    for (let nbr of adj[node]) {
      if (!visited.has(nbr)) dfs(nbr);
    }
  }

  for (let i = 0; i < n; ++i) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }

  return count;
}

let n = 6;
let edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [4, 5],
];

console.log(countComponents(n, edges));
