function longestCommonPrefix(strs: string[]): string {
    let ans = new Array()
    let maxLength = Number.MAX_VALUE
    let curr

    for (let str of strs) {
        maxLength = Math.min(maxLength, str.length)
    }

    for (let i = 0; i < maxLength; i++) {
        curr = strs[0][i]
        for (let str of strs) {
            if (str[i] !== curr) return ans.join("")
        }
        ans.push(curr)
    }

    return ans.join("")
};

let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))
