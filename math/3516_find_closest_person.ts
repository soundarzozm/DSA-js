function findClosest(x: number, y: number, z: number): number {
  let t1 = Math.abs(x - z)
  let t2 = Math.abs(y - z)

  if (t2 > t1) return 1
  if (t1 > t2) return 2
  return 0
};

let x = 2;
let y = 7;
let z = 4;

console.log(findClosest(x, y, z));
