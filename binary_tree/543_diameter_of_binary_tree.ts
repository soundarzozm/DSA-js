import { BinaryTree, TreeNode } from "./index";

let maxLength = 0;

function diameterOfBinaryTree(root: TreeNode | null): number {
  dfs(root);
  return maxLength;
}

function dfs(root: TreeNode | null): number {
  if (!root) return 0;

  let left = dfs(root.left);
  let right = dfs(root.right);

  maxLength = Math.max(maxLength, left + right);

  return 1 + Math.max(left, right);
}

const newTree = new BinaryTree([
  4,
  -7,
  -3,
  null,
  null,
  -9,
  -3,
  9,
  -7,
  -4,
  null,
  6,
  null,
  -6,
  -6,
  null,
  null,
  0,
  6,
  5,
  null,
  9,
  null,
  null,
  -1,
  -4,
  null,
  null,
  null,
  -2,
]);
console.log(diameterOfBinaryTree(newTree.root));
