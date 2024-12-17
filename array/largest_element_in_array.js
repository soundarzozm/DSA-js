class Solution {
    largest(arr) {
        let maxValue = Number.MIN_SAFE_INTEGER
        
        for (let i = 0; i < arr.length; i++) {
            maxValue = arr[i] > maxValue ? arr[i] : maxValue
        }

        return maxValue
    }
}

const solution = new Solution()
const arr = [1, 8, 7, 56, 90]
console.log(solution.largest(arr))