function canReach(arr: number[], start: number): boolean {
  let ans = false;
  const n = arr.length;
  let visited = new Array(n).fill(false);

  function bfs(idx: number) {
    if (visited[idx] === true) return;
    if (arr[idx] === 0) ans = true;

    visited[idx] = true;

    let px = idx + arr[idx];
    let nx = idx - arr[idx];

    if (px >= 0 && px < n && ans === false) {
      bfs(px);
    }

    if (nx >= 0 && nx < n && ans === false) {
      bfs(nx);
    }
  }

  bfs(start);

  return ans;
}

const arr = [4, 2, 3, 0, 3, 1, 2];
const start = 5;

console.log(canReach(arr, start));
