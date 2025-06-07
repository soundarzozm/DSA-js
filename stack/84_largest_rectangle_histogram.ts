function largestRectangleArea(heights: number[]): number {
  // Monotonically increasing stack
  // [height, index]
  let stack: Array<[number, number]> = [];
  let maxArea = 0;

  for (let i = 0; i <= heights.length; ++i) {
    let currentHeight = i === heights.length ? 0 : heights[i];

    while (stack.length > 0 && stack[stack.length - 1][0] > currentHeight) {
      let height = stack.pop()[0];
      let width = stack.length === 0 ? i : i - stack[stack.length - 1][1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }

    stack.push([heights[i], i]);
  }

  return maxArea;
}

let heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights));
