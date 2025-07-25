function validTree(n: number, edges: number[][]): boolean {
  if (edges.length >= n) return false;

  let adj = new Array();
  let visited = new Set();
  let parent = new Array(n).fill(0).map((_, i) => i);

  for (let i = 0; i < n; ++i) {
    adj.push(new Set());
  }

  for (let [u, v] of edges) {
    adj[u].add(v);
    adj[v].add(u);
  }

  let isCycle = false;

  function dfs(src: number, prev: number) {
    console.log(src, prev);
    if (isCycle) return;

    if (visited.has(src) && parent[src] !== prev) {
      isCycle = true;
      return;
    }

    visited.add(src);
    parent[src] = prev;

    for (let nbr of adj[src]) {
      if (nbr !== prev) dfs(nbr, src);
    }
  }

  dfs(0, 0);

  return !isCycle && visited.size === n;
}

let n = 4;
let edges = [
  [0, 1],
  [2, 3],
];

console.log(validTree(n, edges));
