import { TreeNode } from "./index.ts";

function lowestCommonAncestor(
  root: TreeNode<number> | null,
  p: TreeNode<number> | null,
  q: TreeNode<number> | null,
): TreeNode<number> | null {
  if (!p || !q || !root) return root;

  if (p.value < root.value && q.value < root.value)
    return lowestCommonAncestor(root.left, p, q);
  if (p.value > root.value && q.value > root.value)
    return lowestCommonAncestor(root.right, p, q);

  return root;
}
