export class TrieNode {
  children: Map<string, TrieNode>;
  value: string;
  endOfWord: boolean;

  constructor(char?: string) {
    this.value = char ? char : "root";
    this.children = new Map();
    this.endOfWord = true;
  }
}

export default class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  add(word: string) {
    let root = this.root;
    for (let i = 0; i < word.length; i++) {
      if (root.children.has(word[i])) {
        root = root.children.get(word[i]);
      } else {
        root.endOfWord = false;
        root.children.set(word[i], new TrieNode(word[i]));
        root = root.children.get(word[i]);
      }
    }
  }

  search(word: string) {
    let root = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!root.children.has(word[i])) return false;
      root = root.children.get(word[i]);
    }
    return true;
  }
}

// let trie = new Trie();
// trie.add("bro");

// console.log(trie.search("br"));
