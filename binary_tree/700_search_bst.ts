import { TreeNode } from ".";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null;

  if (root.value > val) {
    return searchBST(root.left, val);
  } else if (root.value < val) {
    return searchBST(root.right, val);
  } else {
    return root;
  }
}
