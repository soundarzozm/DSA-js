function rotate(nums: number[], k: number): void {
  k = k % nums.length;

  rotateArrayInPlace(nums, 0, nums.length - 1);
  rotateArrayInPlace(nums, 0, k - 1);
  rotateArrayInPlace(nums, k, nums.length - 1);
}

function rotateArrayInPlace(array: number[], start: number, end: number) {
  let buff: number;

  while (start < end) {
    buff = array[start];
    array[start] = array[end];
    array[end] = buff;
    start += 1;
    end -= 1;
  }
}

let nums: number[] = [1, 2, 3, 4, 5, 6, 7];
let k: number = 3;

rotate(nums, k);

console.log(nums);
