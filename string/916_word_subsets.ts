function wordSubsets(words1: string[], words2: string[]): string[] {
  let ans: Set<string> = new Set()
  let baseCondition = new Map()

  for (let i = 0; i < words2.length; i++) {
    let hashMap = new Map()

    for (let j = 0; j < words2[i].length; j++) {
      if (!hashMap.has(words2[i][j])) {
        hashMap.set(words2[i][j], 0)
      }
      hashMap.set(words2[i][j], hashMap.get(words2[i][j]) + 1)
    }

    hashMap.forEach((value, key) => {
      if (!baseCondition.has(key)) {
        baseCondition.set(key, value)
      } else {
        baseCondition.set(key, Math.max(baseCondition.get(key), value))
      }
    })
  }

  for (let i = 0; i < words1.length; i++) {
    let hashCopy = new Map(baseCondition)

    for (let j = 0; j < words1[i].length; j++) {
      if (hashCopy.has(words1[i][j])) {
        hashCopy.set(words1[i][j], hashCopy.get(words1[i][j]) - 1)
      }
    }

    let values = Array.from(hashCopy.values())
    
    if (!values.some((value) => value > 0)) {
      ans.add(words1[i])
    }
  }
  return [...ans]
}