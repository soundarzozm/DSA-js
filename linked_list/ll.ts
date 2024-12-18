class LLNode {
    value: string | number;
    next: LLNode | null

    constructor(value: string | number ) {
        this.value = value;
        this.next = null;
    }
}

class LL {
    head: LLNode
    constructor(nodeList: Array<number | string>) {
        this.head = new LLNode(nodeList[0])

        let currentNode = this.head

        for (let i = 1; i < nodeList.length; i++) {
            currentNode.next = new LLNode(nodeList[i])
            currentNode = currentNode.next
        }
    }
}

let myLl = new LL([1, 2, 3, 4, 5])
console.log(myLl.head.next?.next)