function smallestRepunitDivByK(k: number): number {
  if (k % 2 === 0) return -1;
  if (k === 1) return 1;

  let num = 1;
  let count = 1;
  let set = new Set();

  while (num !== 0) {
    if (set.has(num)) return -1;
    set.add(num);
    num = (num * 10 + 1) % k;
    count++;
  }

  return count;
}

let k = 3;
console.log(smallestRepunitDivByK(k));
