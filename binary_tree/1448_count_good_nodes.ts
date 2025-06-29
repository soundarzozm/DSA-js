import { TreeNode } from "./index.ts";

function goodNodes(root: TreeNode<number> | null): number {
  let count = 0;

  function dfs(root: TreeNode<number> | null, maxValue: number) {
    if (!root) return;

    if (root.value >= maxValue) count++;

    dfs(root.left, Math.max(root.value, maxValue));
    dfs(root.right, Math.max(root.value, maxValue));
  }

  dfs(root, Number.NEGATIVE_INFINITY);

  return count;
}
