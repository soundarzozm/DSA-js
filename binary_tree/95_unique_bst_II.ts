/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function generateTrees(n: number): Array<TreeNode | null> {
  let ans = [];
  let set = new Set();
  let cur = [];

  function backtrack(root, parent) {
    if (set.size === n) {
      ans.push(deepClone(root));
      return;
    }

    for (let i = 1; i <= n; ++i) {
      if (set.has(i)) continue;

      let node = new TreeNode(i);

      if (parent.val > i) {
        parent.left = node;
        set.add(i);
        backtrack(root, node);
        parent.left = null;
        set.delete(i);
      } else {
        parent.right = node;
        set.add(i);
        backtrack(root, node);
        parent.right = null;
        set.delete(i);
      }
    }
  }

  for (let i = 1; i <= n; ++i) {
    let root = new TreeNode(i);
    set.add(i);
    backtrack(root, root);
    set.delete(i);
  }

  return ans;
}

function deepClone(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  const newRoot: TreeNode = {
    val: root.val,
    left: null,
    right: null,
  };

  newRoot.left = deepClone(root.left);
  newRoot.right = deepClone(root.right);

  return newRoot;
}
