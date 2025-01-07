function minEatingSpeed(piles: number[], h: number): number {
  let l: number = 1;
  let r: number = Math.max(...piles);
  let m: number;
  let ans: number = l;

  while (l <= r) {
    m = Math.floor((l + r) / 2);

    if (calculateHours(piles, m) > h) {
      l = m + 1;
    } else {
      ans = m;
      r = m - 1;
    }
  }

  return ans;
}

function calculateHours(piles: number[], speed: number): number {
  let count: number = 0;
  let quotient: number;
  let remainder: number;

  for (let i = 0; i < piles.length; i++) {
    quotient = Math.floor(piles[i] / speed);
    remainder = piles[i] % speed;

    if (remainder != 0) {
      count += 1;
    }
    count += quotient;
  }

  return count;
}
