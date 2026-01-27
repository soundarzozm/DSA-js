function minimumAbsDifference(arr: number[]): number[][] {
  const n = arr.length;
  arr.sort((a, b) => a - b);

  let ans = [];
  let absoluteMinimum = Number.MAX_VALUE;

  for (let i = 0; i < n - 1; i++) {
    absoluteMinimum = Math.min(absoluteMinimum, arr[i + 1] - arr[i]);
  }

  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] - arr[i] === absoluteMinimum) ans.push([arr[i], arr[i + 1]]);
  }

  return ans;
}

const arr = [4, 2, 1, 3];
console.log(minimumAbsDifference(arr));
