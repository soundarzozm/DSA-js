import { BinaryTree, TreeNode } from "./index";

const isSymmetric = (root: TreeNode | null): boolean => {
  return isMirror(root, root);
};

const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;

  return (
    t1.value === t2.value &&
    isMirror(t1.left, t2.right) &&
    isMirror(t1.right, t2.left)
  );
};

const tree1 = new BinaryTree([1, 2, 2, 3, 4, 4, 3]);
console.log(isSymmetric(tree1.root));
