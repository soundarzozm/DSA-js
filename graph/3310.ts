// 3310. Remove Methods From Project

function remainingMethods(
  n: number,
  k: number,
  invocations: number[][],
): number[] {
  const adj: Map<number, number[]> = new Map();
  let canRemove: boolean = true;

  for (let [u, v] of invocations) {
    if (!adj.has(u)) adj.set(u, []);

    adj.get(u).push(v);
  }

  const visited: Set<number> = new Set();

  function dfs(node: number): void {
    if (visited.has(node)) return;

    visited.add(node);

    for (let nbr of adj.get(node) ?? []) {
      dfs(nbr);
    }
  }

  dfs(k);

  for (let [key, values] of adj) {
    if (canRemove === false) break;

    for (let value of values) {
      if (visited.has(value) && !visited.has(key)) {
        canRemove = false;
        break;
      }
    }
  }

  let ans: number[] = [...Array(n).keys()];

  return canRemove ? ans.filter((element) => !visited.has(element)) : ans;
}

const n = 4;
const k = 1;
const invocations = [
  [1, 2],
  [0, 1],
  [3, 2],
];

console.log(remainingMethods(n, k, invocations));
