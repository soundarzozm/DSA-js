class DLLNode {
    prev: DLLNode | null;
    value: string | number;
    next: DLLNode | null

    constructor(value: string | number ) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DLL {
    head: DLLNode
    constructor(nodeList: Array<number | string>) {
        this.head = new DLLNode(nodeList[0])

        let currentNode = this.head

        for (let i = 1; i < nodeList.length; i++) {
            currentNode.next = new DLLNode(nodeList[i])
            currentNode.next.prev = currentNode
            currentNode = currentNode.next
        }

        
    }
}

let myDll = new DLL([1, 2, 3, 4, 5])
console.log(myDll.head.next?.next?.next?.next)