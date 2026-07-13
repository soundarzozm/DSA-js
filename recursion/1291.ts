// 1291. Sequential Digits

function sequentialDigits(low: number, high: number): number[] {
  const ans: number[] = [];

  function isInRange(arr: number[]): boolean {
    let num = Number(arr.join(""));
    return num >= low && num <= high;
  }

  function isTooBig(arr: number[]): boolean {
    let num = Number(arr.join(""));
    return num > high;
  }

  function recursion(arr: number[]): void {
    const lastDigit = arr[arr.length - 1];

    if (lastDigit < 9) {
      arr.push(lastDigit + 1);
    } else {
      return;
    }

    if (isTooBig(arr)) return;

    if (isInRange(arr)) {
      ans.push(Number(arr.join("")));
    }

    recursion(arr);
  }

  for (let i = 1; i <= 9; i++) {
    const nArr: number[] = [i];
    recursion(nArr);
  }

  return ans.sort((a, b) => a - b);
}

const low = 1000,
  high = 13000;

console.log(sequentialDigits(low, high));
