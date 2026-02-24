import { TreeNode } from "./index";

function sumRootToLeaf(root: TreeNode<number> | null): number {
  let ans = 0;

  function dfs(root: TreeNode<number> | null, count: number) {
    if (!root) return;

    count = count * 2 + root.value;

    // If leaf, add to ans
    if (!root.left && !root.right) {
      ans += count;
      return;
    }

    dfs(root.left, count);
    dfs(root.right, count);
  }

  dfs(root, 0);

  return ans;
}
