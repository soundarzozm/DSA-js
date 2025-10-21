function findLexSmallestString(s: string, a: number, b: number): string {
  let ans = s;

  let visited: Set<string> = new Set();
  let queue: string[] = [s];

  while (queue.length > 0) {
    let cur: string = queue.shift();

    if (cur < ans) ans = cur;

    // Operation A
    let tempArray = cur.split("");
    for (let i = 1; i < tempArray.length; i += 2) {
      tempArray[i] = String((Number(tempArray[i]) + a) % 10);
    }
    let temp = tempArray.join("");
    if (!visited.has(temp)) {
      queue.push(temp);
      visited.add(temp);
    }

    // Operation B
    temp = rightRotate(cur, b);
    if (!visited.has(temp)) {
      queue.push(temp);
      visited.add(temp);
    }
  }

  return ans;
}

function rightRotate(s: string, n: number): string {
  n = n % s.length;
  return s.slice(s.length - n) + s.slice(0, s.length - n);
}
