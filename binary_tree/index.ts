export class TreeNode {
    value: number | string | null; // Use number (primitive) instead of Number
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number | string | null = null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinaryTree {
    root: TreeNode;
    preOrder: Array<number | string>
    postOrder: Array<number | string>
    inOrder: Array<number | string>

    constructor(root: TreeNode, nodeList: Array<number | string>) {
        this.root = root;
        this.preOrder = [];
        this.postOrder = [];
        this.inOrder = [];
        this.createTreeLevelOrder(this.root, nodeList);
    }

    createTreeLevelOrder(root: TreeNode, nodeList: Array<number | string>): void {
        const queue: TreeNode[] = [root];
        let i = 1;

        while (i < nodeList.length) {
            const current = queue.shift();
            if (current) {
                // Add left child
                current.left = new TreeNode(nodeList[i]);
                queue.push(current.left);
                i++;

                // Add right child if there's still data
                if (i < nodeList.length) {
                    current.right = new TreeNode(nodeList[i]);
                    queue.push(current.right);
                    i++;
                }
            }
        }
    }

    preOrderTraversal(root: TreeNode | null): void {
        if(!root?.value) return

        this.preOrder.push(root.value)
        this.preOrderTraversal(root.left)
        this.preOrderTraversal(root.right)
    }

    postOrderTraversal(root: TreeNode | null): void {
        if(!root?.value) return

        this.postOrderTraversal(root.left)
        this.postOrderTraversal(root.right)
        this.postOrder.push(root.value)
    }

    inOrderTraversal(root: TreeNode | null): void {
        if(!root?.value) return

        this.inOrderTraversal(root.left)
        this.inOrder.push(root.value)
        this.inOrderTraversal(root.right)
    }
}

// INORDER -> LEFT ROOT RIGHT
// PRE-ORDER -> ROOT LEFT RIGHT
// POST-ORDER -> LEFT RIGHT ROOT

// Example usage
// const root = new TreeNode(1);
// const newTree = new BinaryTree(root, [1, 2, 3, 4, 5, 6, 7]);

// console.log(newTree);
