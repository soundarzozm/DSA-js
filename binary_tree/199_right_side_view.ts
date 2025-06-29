import { TreeNode } from "./index.ts";

function rightSideView(root: TreeNode | null): number[] {
  let ans: number[] = [];

  function dfs(root: TreeNode | null, level: number): null {
    if (!root) return null;

    if (level === ans.length) ans.push(root.value);
    dfs(root.right, level + 1);
    dfs(root.left, level + 1);
  }

  dfs(root, 0);

  return ans;
}
