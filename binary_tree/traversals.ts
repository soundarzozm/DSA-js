import { BinaryTree } from "./index";

const newTree = new BinaryTree([3, 9, 20, null, null, 15, 7]);

newTree.preOrderTraversal(newTree.root);
console.log(newTree.preOrder);

newTree.postOrderTraversal(newTree.root);
console.log(newTree.postOrder);

newTree.inOrderTraversal(newTree.root);
console.log(newTree.inOrder);

newTree.levelOrderTraversal(newTree.root);
console.log(newTree.levelOrder);
