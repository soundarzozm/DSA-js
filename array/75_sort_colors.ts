// Dutch Flag Algorithm

function sortColors(nums: number[]): void {
  let l = 0;
  let m = 0;
  let r = nums.length - 1;
  let buff: number;

  while (m <= r && m >= l) {
    if (nums[m] < 1) {
      buff = nums[l];
      nums[l] = nums[m];
      nums[m] = buff;
      l += 1;
      m += 1;
    } else if (nums[m] > 1) {
      buff = nums[r];
      nums[r] = nums[m];
      nums[m] = buff;
      r -= 1;
    } else {
      m += 1;
    }
  }
}

let nums: number[] = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);
