function findLucky(arr: number[]): number {
  let map = new Map();
  let ans = -1;

  for (let i = 0; i < arr.length; ++i) {
    if (!map.has(arr[i])) map.set(arr[i], 0);
    map.set(arr[i], map.get(arr[i]) + 1);
  }

  for (let [key, value] of map) {
    if (key === value) ans = Math.max(ans, key);
  }

  return ans;
}
