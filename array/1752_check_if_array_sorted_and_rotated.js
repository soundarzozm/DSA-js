class Solution {
  check(arr) {
    let isRotated = false;
    let rotatedIdx = -1;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        isRotated = true;
        rotatedIdx = i;
        break;
      }
    }

    let maxElement = arr[0];

    if (isRotated) {
      for (let i = rotatedIdx + 1; i < arr.length - 1; i++) {
        if (arr[i + 1] < arr[i] || arr[i + 1] > maxElement) {
          return false;
        }
      }
    }

    return true;
  }
}

const solution = new Solution();
const arr = [1, 2, 3];
console.log(solution.check(arr));
