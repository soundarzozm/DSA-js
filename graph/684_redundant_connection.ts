function findRedundantConnection(edges: number[][]): number[] {
  const n = edges.length;
  const adj: Map<number, Set<number>> = new Map();

  for (let i = 1; i <= n; ++i) {
    adj.set(i, new Set<number>());
  }

  for (const [from, to] of edges) {
    adj.get(from)!.add(to);
    adj.get(to)!.add(from);
  }

  const visited: number[] = new Array(n + 1).fill(0);
  const parent: number[] = new Array(n + 1).fill(0).map((_, i) => i);

  let cycleNode: number | null = null;

  function dfs(src: number, prev: number) {
    if (cycleNode !== null) return;

    if (visited[src] === 1) {
      if (parent[src] !== prev) {
        cycleNode = src;
        parent[src] = prev;
        return;
      }
    }

    parent[src] = prev;
    visited[src] = 1;

    for (const nbr of adj.get(src)!) {
      if (nbr !== prev) dfs(nbr, src);
    }
  }

  dfs(1, 1);

  if (cycleNode === null) return [];

  const cycleNodes = new Set<number>([cycleNode]);
  let parentNode = parent[cycleNode];

  while (!cycleNodes.has(parentNode)) {
    cycleNodes.add(parentNode);
    parentNode = parent[parentNode];
  }

  for (let i = n - 1; i >= 0; i--) {
    const [u, v] = edges[i];
    if (cycleNodes.has(u) && cycleNodes.has(v)) return [u, v];
  }

  return [];
}

const edges = [
  [3, 4],
  [1, 2],
  [2, 4],
  [3, 5],
  [2, 5],
];
console.log(findRedundantConnection(edges));
