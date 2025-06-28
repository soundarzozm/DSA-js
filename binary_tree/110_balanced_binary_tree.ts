import { BinaryTree, TreeNode } from "./index";

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  if (Math.abs(leftDepth - rightDepth) > 1) return false;

  return isBalanced(root.left) && isBalanced(root.right);
}

function maxDepth(root: TreeNode | null): number {
  if (root == null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

const newTree = new BinaryTree([1, 2, 2, 3, 3, null, null, 4, 4]);
console.log(isBalanced(newTree.root));
