function countPrefixSuffixPairs(words: string[]): number {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = i; j < words.length; j++) {
      if (i == j) continue;

      if (checkPrefixAndSuffix(words[i], words[j])) count += 1;
    }
  }

  return count;
}

function checkPrefixAndSuffix(word1: string, word2: string): boolean {
  let wordLength = word1.length;
  let flag = false;

  return word2.slice(0, wordLength) == word1 && word2.slice(word2.length - wordLength, word2.length) == word1;
}

let words = ["a", "aba", "ababa", "aa"];
console.log(countPrefixSuffixPairs(words));
