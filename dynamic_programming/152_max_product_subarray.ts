// Best product so far (maxProd)
// Worst product so far (minProd)
//
// When you hit:
// Positive number → both grow normally
// Negative number → pockets swap roles
// Zero → empty both pockets
//
// That's why we need minProd because when number is negative, minProd becomes maxProd (role swap)

function maxProduct(nums: number[]): number {
  let maxProd = nums[0];
  let minProd = nums[0];
  let ans = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let newMaxProd = Math.max(nums[i], maxProd * nums[i], minProd * nums[i]);
    let newMinProd = Math.min(nums[i], minProd * nums[i], maxProd * nums[i]);

    maxProd = newMaxProd;
    minProd = newMinProd;

    ans = Math.max(ans, maxProd);
  }

  return ans;
}

const nums = [-2, 3, -4];
console.log(maxProduct(nums));
