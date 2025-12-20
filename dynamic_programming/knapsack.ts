function knapsack(v: number[], w: number[], c: number): number {
  let n = v.length;

  function recursion(n: number, c: number): number {
    console.log(n, c);
    if (n === 0 || c === 0) return 0;

    if (w[n - 1] <= c) {
      return Math.max(
        v[n - 1] + recursion(n - 1, c - w[n - 1]),
        recursion(n - 1, c),
      );
    } else {
      return recursion(n - 1, c);
    }
  }

  return recursion(n, c);
}

const v = [60, 100, 120];
const w = [10, 20, 30];
const c = 50;

console.log(knapsack(v, w, c));
