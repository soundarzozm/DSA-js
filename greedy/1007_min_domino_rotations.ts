function minDominoRotations(tops: number[], bottoms: number[]): number {
  let ans = -1

  let first = checkList(tops[0], tops, bottoms)
  let second = checkList(bottoms[0], tops, bottoms)

  ans = Math.min(first, second)

  if (ans === Number.MAX_VALUE) return -1
  return ans
};

function checkList(candidate: number, tops: number[], bottoms: number[]): number {
  let n = tops.length
  let topRotationCount = 0
  let bottomRotationCount = 0

  for (let i = 0; i < n; i++) {
    if (candidate !== tops[i] && candidate !== bottoms[i]) return Number.MAX_VALUE

    if (candidate !== tops[i]) {
      topRotationCount++
    } else if (candidate !== bottoms[i]) {
      bottomRotationCount++
    }
  }

  return Math.min(topRotationCount, bottomRotationCount)
}

let tops = [3,5,1,2,3]
let bottoms = [3,6,3,3,4]

console.log(minDominoRotations(tops, bottoms))
