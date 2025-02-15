function maximumSum(nums: number[]): number {
  let map = new Map();
  let maxSum = -1;

  for (let num of nums) {
    let currentSum = calculateDigitSum(num);
    if (!map.has(currentSum)) map.set(currentSum, []);
    let modifiedArray = map.get(currentSum);
    maxSum = Math.max(maxSum, Math.max(...modifiedArray) + num);
    modifiedArray.push(num);
    map.set(currentSum, modifiedArray);
  }

  return maxSum;
}

function calculateDigitSum(num: number): number {
  let sum = 0;

  while (num != 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}
