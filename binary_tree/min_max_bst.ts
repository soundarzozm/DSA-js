import { TreeNode } from "./index";

function minValue(root: TreeNode) {
  if (!root.left) return root.value;
  return minValue(root.left);
}

function maxValue(root: TreeNode) {
  if (!root.right) return root.value;
  return maxValue(root.right);
}
