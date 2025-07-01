import { TreeNode } from "./index.ts";

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode<number> | null): string {
  if (!root) return "";

  let queue: Array<TreeNode<number> | null> = [root];
  let ans: Array<number | string> = [];

  while (queue.length > 0) {
    let qLen = queue.length;

    for (let i = 0; i < qLen; ++i) {
      let node = queue.shift();
      if (!node) {
        ans.push("#");
        continue;
      }
      queue.push(node.left);
      queue.push(node.right);
      ans.push(node.value);
    }
  }

  let i = ans.length - 1;
  while (ans[i] === "#") --i;

  ans = ans.slice(0, i + 1);
  return ans.join(",");
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode<number> | null {
  let levelOrder: Array<string> = data.split(",");

  if (levelOrder[0] === "") return null;

  let queue: Array<TreeNode<number>> = [];

  let root = new TreeNode(Number(levelOrder[0]));
  queue.push(root);

  let i = 1;

  while (queue.length > 0 && i < levelOrder.length) {
    let head: TreeNode<number> = queue.shift();

    if (levelOrder[i] === "#") {
      head.left = null;
    } else {
      let left = Number(levelOrder[i]);
      head.left = new TreeNode(left);
      queue.push(head.left);
    }
    ++i;

    if (i >= levelOrder.length) break;

    if (levelOrder[i] === "#") {
      head.right = null;
    } else {
      let right = Number(levelOrder[i]);
      head.right = new TreeNode(right);
      queue.push(head.right);
    }
    ++i;
  }

  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function serializePreorder(root: TreeNode<number> | null) {
  let ans: Array<number | string> = [];

  function preorder(root: TreeNode<number> | null) {
    if (!root) {
      ans.push("#");
      return;
    }

    ans.push(root.value);
    preorder(root.left);
    preorder(root.right);
  }

  preorder(root);

  return ans.join(",");
}

function deserializePreorder(data: string): TreeNode<number> | null {
  let preorder = data.split(",");
  if (preorder[0] === "") return null;

  let i = 0;
  function buildTree() {
    if (preorder[i] === "#") {
      ++i;
      return null;
    }

    let node = new TreeNode(Number(preorder[i] as string));
    ++i;

    node.left = buildTree();
    node.right = buildTree();

    return node;
  }

  return buildTree();
}
// First it creates all the nodes, then it
// attaches to parent by returning the node
