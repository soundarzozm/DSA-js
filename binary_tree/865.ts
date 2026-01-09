// Smallest Subtree with all the Deepest Nodes

import { TreeNode } from "./index";

function subtreeWithAllDeepest(
  root: TreeNode<number> | null,
): TreeNode<number> | null {
  return dfs(root);
}

function dfs(root: TreeNode<number> | null): TreeNode<number> | null {
  if (!root) return root;
  let leftMax = getDepth(root.left);
  let rightMax = getDepth(root.right);

  if (leftMax < rightMax) {
    return dfs(root.right);
  } else if (leftMax > rightMax) {
    return dfs(root.left);
  }

  return root;
}

function getDepth(root: TreeNode<number> | null, level: number = 0): number {
  if (!root) return level;
  return Math.max(
    getDepth(root.left, level + 1),
    getDepth(root.right, level + 1),
  );
}
