// 1415. The k-th Lexicographical String of All Happy Strings of Length n

function getHappyString(n: number, k: number): string {
  if (k > 3 * Math.pow(2, n - 1)) return "";
  let count = 0;
  let ans = "";

  function generateString(s: string): void {
    if (ans !== "") return;

    if (s.length === n) {
      count++;
      if (count === k) {
        ans = s;
        return;
      }
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

  return ans;
}

const n = 3,
  k = 9;
console.log(getHappyString(n, k));
