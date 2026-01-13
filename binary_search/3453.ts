// Separate Squares I

function separateSquares(squares: number[][]): number {
  let start = Number.MAX_VALUE;
  let end = Number.MIN_VALUE;

  let totalArea = 0;

  for (let square of squares) {
    totalArea += square[2] * square[2];
    start = Math.min(start, square[1]);
    end = Math.max(end, square[1] + square[2]);
  }

  let bottom = start;
  let top = end;

  while (top - bottom >= 1e-5) {
    let mid = (bottom + top) / 2;

    let bottomArea = getAreaBelow(mid, squares);

    if (bottomArea < totalArea / 2) {
      bottom = mid;
    } else {
      top = mid;
    }
  }

  return top;
}

function getAreaBelow(mid: number, squares: number[][]): number {
  let currentArea = 0;

  for (let square of squares) {
    let y = square[1];
    let h = square[2];
    let topY = y + h;

    if (mid >= topY) {
      currentArea += h * h;
    } else if (mid > y) {
      currentArea += (mid - y) * h;
    }
  }

  return currentArea;
}

const squares = [
  [0, 0, 2],
  [1, 1, 1],
];
console.log(separateSquares(squares));
