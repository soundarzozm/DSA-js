import { TreeNode } from "./index.ts";

function isValidBST(root: TreeNode<number> | null): boolean {
  return validate(root, -Infinity, Infinity);
}

function validate(
  root: TreeNode<number> | null,
  min: number,
  max: number,
): boolean {
  if (!root) return true;

  if (root.value > min && root.value < max)
    return (
      validate(root.left, min, root.value) &&
      validate(root.right, root.value, max)
    );
  return false;
}
