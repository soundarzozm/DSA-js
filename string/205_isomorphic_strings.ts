function isIsomorphic(s: string, t: string): boolean {
    let n = s.length
    if (s.length !== t.length) return false

    let frequencyArray1 = new Array(256).fill(0)
    let frequencyArray2 = new Array(256).fill(0)

    for (let i = 0; i < n; i++) {
        let sChar = s.charCodeAt(i)
        let tChar = t.charCodeAt(i)

        if (frequencyArray1[sChar] !== frequencyArray2[tChar]) return false

        frequencyArray1[sChar] += 1
        frequencyArray2[tChar] += 1
    }
    
    return false
}

let s = "abcd"
let t = "ancd"

console.log(isIsomorphic(s, t))
