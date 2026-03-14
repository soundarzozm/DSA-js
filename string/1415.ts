function getHappyString(n: number, k: number): string {
  if (k > 3 * Math.pow(2, n - 1)) return "";
  const allStrings = [];

  function generateString(s: string): void {
    if (s.length === n) {
      allStrings.push(s);
      return;
    }

    if (s.length == 0) {
      generateString(s + "a");
      generateString(s + "b");
      generateString(s + "c");
      return;
    }

    if (s[s.length - 1] == "a") {
      generateString(s + "b");
      generateString(s + "c");
    } else if (s[s.length - 1] == "b") {
      generateString(s + "a");
      generateString(s + "c");
    } else {
      generateString(s + "a");
      generateString(s + "b");
    }
  }

  generateString("");

  return allStrings[k - 1];
}

const n = 3,
  k = 9;
console.log(getHappyString(n, k));
