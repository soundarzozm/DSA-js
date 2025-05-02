import { TreeNode } from ".";

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  processNode(root);
}

function attachRight(root: TreeNode | null, temp: TreeNode | null): void {
  if (!root) return;

  while (root.right) root = root.right;
  root.right = temp;
}

function processNode(root: TreeNode | null): void {
  if (!root) return;

  processNode(root.left);
  processNode(root.right);

  let temp = root.right;

  if (root.left) {
    root.right = root.left;
    root.left = null;
    attachRight(root.right, temp);
  }
}
