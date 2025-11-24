function prefixesDivBy5(nums: number[]): boolean[] {
  let ans = [];
  let num = 0;

  for (let i = 0; i < nums.length; ++i) {
    num = (num * 2 + nums[i]) % 5;
    ans.push(num === 0);
  }

  return ans;
}

const nums = [1, 0, 1];
console.log(prefixesDivBy5(nums));
