// 2833. Furthest Point From Origin

function furthestDistanceFromOrigin(moves: string): number {
  let blanks = 0;
  let displacement = 0;

  for (let move of moves) {
    if (move === "L") {
      displacement--;
    } else if (move === "R") {
      displacement++;
    } else {
      blanks++;
    }
  }

  if (displacement < 0) return -1 * displacement + blanks;
  return displacement + blanks;
}

const moves = "_R__LL_";
console.log(furthestDistanceFromOrigin(moves));
