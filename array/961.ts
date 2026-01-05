// N-Repeated Element in Size 2N Array

function repeatedNTimes(nums: number[]): number {
  const set = new Set();
  for (let num of nums) {
    if (!set.has(num)) set.add(num);
    else return num;
  }

  return -1;
}

const nums = [5, 1, 5, 2, 5, 3, 5, 4];
console.log(repeatedNTimes(nums));
