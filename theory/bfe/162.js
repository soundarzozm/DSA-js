/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
  let element = arr[0];
  for (let i = 1; i < arr.length; i++) {
    element = element ^ arr[i];
  }
  return element;
}
