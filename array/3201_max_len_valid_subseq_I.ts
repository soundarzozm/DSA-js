function maximumLength(nums: number[]): number {
  let evens = 0;
  let odds = 0;
  let alts = 1;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] % 2 === 0) {
      ++evens;
    } else {
      ++odds;
    }
  }

  let nextOdd = false;
  if (nums[0] % 2 === 0) nextOdd = true;

  for (let i = 1; i < nums.length; ++i) {
    if (nextOdd === false) {
      if (nums[i] % 2 === 0) {
        ++alts;
        nextOdd = true;
      }
    } else {
      if (nums[i] % 2 !== 0) {
        ++alts;
        nextOdd = false;
      }
    }
  }

  return Math.max(evens, odds, alts);
}
