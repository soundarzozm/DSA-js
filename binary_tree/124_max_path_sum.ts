import { TreeNode } from "./index.ts";

function maxPathSum(root: TreeNode<number> | null): number {
  let maxSum = -Infinity;

  function maxPathDown(root: TreeNode<number> | null): number {
    if (!root) return 0;

    let leftMax = Math.max(0, maxPathDown(root.left));
    let rightMax = Math.max(0, maxPathDown(root.right));

    let total = leftMax + rightMax + root.value;

    maxSum = Math.max(maxSum, total);

    return Math.max(leftMax, rightMax) + root.value;
  }

  maxPathDown(root);

  return maxSum;
}
