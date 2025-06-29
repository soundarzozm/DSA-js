import { TreeNode } from "./index.ts";

function levelOrder(root: TreeNode | null): number[][] {
  let ans = [];

  let queue: TreeNode[] = [];
  if (root) queue.push(root);

  while (queue.length > 0) {
    let qLen = queue.length;
    let currentLevel = [];

    for (let i = 0; i < qLen; ++i) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      currentLevel.push(node.value);
    }
    if (currentLevel.length > 0) ans.push(currentLevel);
  }

  return ans;
}
