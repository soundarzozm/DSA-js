function numTilePossibilities(tiles: string): number {
  let ans = 0;
  let map = new Map()

  for (let char of tiles) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  function backtrack() {
    for (let [key, value] of map) {
      if (value === 0) continue;

      ans++
      map.set(key, value - 1)
      backtrack()
      map.set(key, value)
      console.log(map)
    }
  }

  backtrack()

  return ans;
}

console.log(numTilePossibilities("AAB"))
