function matchPlayersAndTrainers(
  players: number[],
  trainers: number[],
): number {
  let ans = 0;

  let p = players.length;
  let t = trainers.length;

  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);

  let pp = 0;
  let tp = 0;

  while (pp < p && tp < t) {
    if (players[pp] > trainers[tp]) {
      ++tp;
    } else {
      ++pp;
      ++ans;
      ++tp;
    }
  }

  return ans;
}
