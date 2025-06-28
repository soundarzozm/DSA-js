import { TreeNode } from "./index.ts";

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!subRoot) return true;
  if (!root) return false;

  if (root.value === subRoot.value)
    return (
      isSame(root, subRoot) ||
      isSubtree(root.left, subRoot) ||
      isSubtree(root.right, subRoot)
    );
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSame(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.value === q.value)
    return isSame(p.left, q.left) && isSame(p.right, q.right);
  return false;
}
