export class TreeNode<T> {
  value: T; // Use number (primitive) instead of Number
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree<T> {
  root: TreeNode<T>;
  preOrder: Array<number | string>;
  postOrder: Array<number | string>;
  inOrder: Array<number | string>;
  levelOrder: Array<number | string>;

  constructor(nodeList: Array<T>) {
    this.root = new TreeNode<T>(nodeList[0]);
    this.preOrder = [];
    this.postOrder = [];
    this.inOrder = [];
    this.levelOrder = [];
    this.createTreeLevelOrder(this.root, nodeList);
  }

  createTreeLevelOrder(root: TreeNode<T>, nodeList: Array<T>): void {
    const queue: TreeNode<T>[] = [root];
    let i = 1;

    while (i < nodeList.length) {
      const current = queue.shift();
      if (current) {
        // Add left child
        if (nodeList[i] != null) {
          current.left = new TreeNode(nodeList[i]);
          queue.push(current.left);
        }
        i++;

        // Add right child if there's still data
        if (i < nodeList.length) {
          if (nodeList[i] != null) {
            current.right = new TreeNode(nodeList[i]);
            queue.push(current.right);
          }
          i++;
        }
      }
    }
  }

  preOrderTraversal(root: TreeNode<T> | null): void {
    if (!root?.value) return;

    this.preOrder.push(root.value);
    this.preOrderTraversal(root.left);
    this.preOrderTraversal(root.right);
  }

  postOrderTraversal(root: TreeNode<T> | null): void {
    if (!root?.value) return;

    this.postOrderTraversal(root.left);
    this.postOrderTraversal(root.right);
    this.postOrder.push(root.value);
  }

  inOrderTraversal(root: TreeNode<T> | null): void {
    if (!root?.value) return;

    this.inOrderTraversal(root.left);
    this.inOrder.push(root.value);
    this.inOrderTraversal(root.right);
  }

  levelOrderTraversal(root: TreeNode<T> | null): void {
    if (!root?.value) return;

    let queue: Array<TreeNode<T>> = [root];

    while (queue.length > 0) {
      let currentNode: TreeNode<T> = queue.shift();
      this.levelOrder.push(currentNode.value);

      if (currentNode?.left) queue.push(currentNode.left);
      if (currentNode?.right) queue.push(currentNode.right);
    }
  }
}

export class BinarySearchTree<T> {
  root: TreeNode<T> | null;
  preOrder: Array<T>;
  postOrder: Array<T>;
  inOrder: Array<T>;
  levelOrder: Array<T>;

  constructor(nodeList: Array<T | null>) {
    let l = 0;
    let r = nodeList.length;

    this.root = this.helper(
      l,
      r,
      nodeList.sort((a, b) => a - b),
    );
  }

  helper(l: T, r: T, nums: Array<T | null>) {
    if (l > r) return null;

    let m = Math.floor((l + r) / 2);

    let root = new TreeNode<T>(nums[m]);
    root.left = this.helper(l, m - 1, nums);
    root.right = this.helper(m + 1, r, nums);

    return root;
  }
}

// INORDER -> LEFT ROOT RIGHT
// PRE-ORDER -> ROOT LEFT RIGHT
// POST-ORDER -> LEFT RIGHT ROOT

// Example usage
// const newTree = new BinaryTree([1, 2, 3, 4, 5, 6, 7]);

// console.log(newTree);
