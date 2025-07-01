import { TreeNode } from "./index.ts";

function kthSmallest(root: TreeNode<number> | null, k: number): number {
  let count = 0;
  let ans: number | null = null;

  function inorder(root: TreeNode<number> | null) {
    // LEFT -> ROOT -> RIGHT
    if (ans) return;
    if (!root) return;

    inorder(root.left);

    count++;
    if (count === k) {
      ans = root.value;
      return;
    }

    inorder(root.right);
  }

  inorder(root);

  return ans;
}
