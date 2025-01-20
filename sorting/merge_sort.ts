function mergeSort(arr: number[], l: number, r: number) {
  if (l == r) return;

  let m = Math.floor((l + r) / 2);

  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);

  merge(arr, l, m, r);
}

function merge(arr: number[], left: number, mid: number, right: number) {
  let temp: number[] = [];

  let leftPointer = left;
  let rightPointer = mid + 1;

  while (leftPointer <= mid && rightPointer <= right) {
    if (arr[leftPointer] <= arr[rightPointer]) {
      temp.push(arr[leftPointer]);
      leftPointer += 1;
    } else {
      temp.push(arr[rightPointer]);
      rightPointer += 1;
    }
  }

  while (leftPointer <= mid) {
    temp.push(arr[leftPointer]);
    leftPointer += 1;
  }

  while (rightPointer <= right) {
    temp.push(arr[rightPointer]);
    rightPointer += 1;
  }

  for (let i = left; i < right + 1; i++) {
    arr[i] = temp[i - left];
  }
}

let arr = [3, 2, 1, 5, 6, 4];
mergeSort(arr, 0, arr.length - 1);
console.log(arr)
