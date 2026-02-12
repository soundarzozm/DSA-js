function getSubFolders(edges: string[][], queries: string[]): number[] {
  const ans = [];
  const graph = new Map();

  graph.set("folder-1", new Set());

  for (let [u, v] of edges) {
    let uEdges = graph.get(u) || new Set();
    uEdges.add(v);
    graph.set(u, uEdges);
  }

  for (let query of queries) {
    const splitQuery = query.split(" ");
    const operation = splitQuery[0];

    if (operation === "mkdir") {
      const op1 = splitQuery[1];
      const op2 = splitQuery[2];

      if (!graph.has(op1)) graph.set(op1, new Set());
      if (!graph.has(op2)) graph.set(op2, new Set());

      let op1Edges = graph.get(op1);
      op1Edges.add(op2);

      graph.set(op1, op1Edges);
    } else if (operation === "rmdir") {
      const node = splitQuery[1];
      for (let [_, value] of graph) {
        value.delete(node);
      }
      graph.delete(node);
    } else {
      const node = splitQuery[1];
      let count = 0;
      const visited = new Set();

      function dfs(node: string) {
        if (!node) return;

        count++;

        if (!graph.has(node)) {
          return;
        }

        for (const child of graph.get(node)) {
          if (!visited.has(child)) {
            dfs(child);
            visited.add(child);
          }
        }
      }

      dfs(node);
      ans.push(count);
    }
  }

  return ans;
}

const existingStructureEdges = [
  ["folder-1", "folder-2"],
  ["folder-2", "folder-3"],
  ["folder-2", "folder-4"],
];

const queries = [
  "mkdir folder-1 folder-5",
  "count_subdir folder-2",
  "count_subdir folder-1",
];

console.log(getSubFolders(existingStructureEdges, queries));
