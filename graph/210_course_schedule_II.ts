function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  let adj = new Map();

  for (let i = 0; i < numCourses; ++i) adj.set(i, new Set());

  for (let [a, b] of prerequisites) {
    let set = adj.get(b);
    set.add(a);
    adj.set(b, set);
  }

  let toposort = topoSort(adj);

  if (toposort.length === numCourses) return toposort;
  return [];
}

function topoSort(adj: Map<number, Set<number>>) {
  let indegree = new Map();
  let ans: number[] = [];

  for (let [key, value] of adj) {
    if (!indegree.has(key)) indegree.set(key, 0);
    for (let node of value) {
      if (!indegree.has(node)) indegree.set(node, 0);
      indegree.set(node, indegree.get(node) + 1);
    }
  }

  let queue: number[] = [];

  for (let [key, value] of indegree) {
    if (value === 0) queue.push(key);
  }

  while (queue.length > 0) {
    let cur: number = queue.shift();
    ans.push(cur);

    for (let node of adj.get(cur)) {
      indegree.set(node, indegree.get(node) - 1);
      if (indegree.get(node) === 0) queue.push(node);
    }
  }

  return ans;
}

let numCourses = 2;
let prerequisites = [[1, 0]];

console.log(findOrder(numCourses, prerequisites));
