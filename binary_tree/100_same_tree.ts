import { BinaryTree, TreeNode } from './index'

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(!p && !q) return true

    if (p && q && p.value == q.value) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)

    return false
};

const tree1 = new BinaryTree([1, 2]);
const tree2 = new BinaryTree([1, null,  2]);
console.log(isSameTree(tree1.root, tree2.root))
