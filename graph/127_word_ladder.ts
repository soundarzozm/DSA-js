function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  let adj = new Map();
  let keys = [beginWord, ...wordList];

  for (let word of keys) {
    adj.set(word, new Set());
  }

  if (!adj.has(endWord)) return 0;

  for (let i = 0; i < keys.length - 1; ++i) {
    let word1 = keys[i];

    for (let j = i + 1; j < keys.length; ++j) {
      let word2 = keys[j];
      if (isValid(word1, word2)) {
        adj.set(word1, adj.get(word1).add(word2));
        adj.set(word2, adj.get(word2).add(word1));
      }
    }
  }

  function bfs(from: string) {
    let queue: [string, number][] = [[from, 1]];
    let visited = new Set();

    visited.add(from);

    while (queue.length > 0) {
      let [cur, level] = queue.shift();

      if (cur === endWord) {
        return level;
      }

      for (let nbr of adj.get(cur)) {
        if (!visited.has(nbr)) {
          queue.push([nbr, level + 1]);
          visited.add(nbr);
        }
      }
      level++;
    }

    return 0;
  }

  return bfs(beginWord);
}

function isValid(word1: string, word2: string) {
  let same = 0;
  let diff = 0;

  for (let i = 0; i < word1.length; ++i) {
    if (word1[i] === word2[i]) same++;
    else diff++;
  }

  return diff === 1;
}

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot", "dot", "tog", "cog"];

console.log(ladderLength(beginWord, endWord, wordList));
