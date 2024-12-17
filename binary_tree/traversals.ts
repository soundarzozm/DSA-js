import { BinaryTree, TreeNode } from './index'

const root = new TreeNode(1);
const newTree = new BinaryTree(root, [1, 3, 4, 5, 2, 7, 6]);

newTree.preOrderTraversal(newTree.root)
console.log(newTree.preOrder)

newTree.postOrderTraversal(newTree.root)
console.log(newTree.postOrder)

newTree.inOrderTraversal(newTree.root)
console.log(newTree.inOrder)