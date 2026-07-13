// 1331. Rank Transform of an Array

function arrayRankTransform(arr: number[]): number[] {
  let sorted: number[] = [...arr];

  sorted = sorted.sort((a, b) => a - b);
  const map = new Map<number, number>();

  let rank: number = 1;

  for (let num of sorted) {
    if (!map.has(num)) {
      map.set(num, rank);
      rank++;
    }
  }

  return arr.map((element): number => map.get(element));
}

const arr = [37, 12, 28, 9, 100, 56, 80, 5, 12];
console.log(arrayRankTransform(arr));
