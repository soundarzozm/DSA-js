import { BinaryTree, TreeNode } from "./index";

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

const newTree = new BinaryTree([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(newTree.root));
