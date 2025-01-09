class Solution {
  bubbleSort(arr: Array<number>, n: number) {
    if (n == 1) return;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let buff = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = buff;
      }
    }

    this.bubbleSort(arr, n - 1);
    return arr
  }
}

const solution = new Solution();
const nums = [4, 1, 2, 1, 2];
const len = nums.length;

console.log(solution.bubbleSort(nums, len))
