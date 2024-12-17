class Solution {
    secondLargest(arr) {
        let maxValue = Number.MIN_SAFE_INTEGER
        let secondMaxValue = Number.MIN_SAFE_INTEGER
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxValue) {
                secondMaxValue = maxValue
                maxValue = arr[i]
            } else if (arr[i] > secondMaxValue && arr[i] != maxValue) {
                secondMaxValue = arr[i]
            }
        }

        return secondMaxValue
    }
}

const solution = new Solution()
const arr = [1, 8, 7, 56, 90]
console.log(solution.secondLargest(arr))