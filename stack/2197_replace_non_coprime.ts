function gcd(a: number, b: number): number {
  for (let temp = b; b !== 0; ) {
    b = a % b;
    a = temp;
    temp = b;
  }
  return a;
}

function lcm(a: number, b: number): number {
  const gcdValue = gcd(a, b);
  return (a * b) / gcdValue;
}

function replaceNonCoprimes(nums: number[]): number[] {
  let stack: number[] = [];

  for (let num of nums) {
    stack.push(num);

    while (
      stack.length > 1 &&
      gcd(stack[stack.length - 1], stack[stack.length - 2]) > 1
    ) {
      let top1: number = stack.pop() as number;
      let top2: number = stack.pop() as number;
      stack.push(lcm(top1, top2));
    }
  }

  return stack;
}

let nums = [6, 4, 3, 2, 7, 6, 2];

console.log(replaceNonCoprimes(nums));
