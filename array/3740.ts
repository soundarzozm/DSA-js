// 3740. Minimum Distance Between Three Equal Elements I

function minimumDistance(nums: number[]): number {
  const n = nums.length;
  let ans = Number.MAX_VALUE;

  const map = new Map();

  for (let i = 0; i < n; i++) {
    if (!map.has(nums[i])) map.set(nums[i], []);

    const indices = map.get(nums[i]);
    indices.push(i);

    const len = indices.length;

    if (len >= 3) {
      ans = Math.min(
        ans,
        Math.abs(indices[len - 3] - indices[len - 2]) +
          Math.abs(indices[len - 2] - indices[len - 1]) +
          Math.abs(indices[len - 3] - indices[len - 1]),
      );
    }
  }

  if (ans === Number.MAX_VALUE) return -1;
  return ans;
}

const nums = [1, 1, 2, 3, 2, 1, 2];
console.log(minimumDistance(nums));
