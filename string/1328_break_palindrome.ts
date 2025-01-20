function breakPalindrome(palindrome: string): string {
  let len = palindrome.length
  let isOdd = false
  if (len <= 1) return ""

  let palindromeArray = palindrome.split("")

  if (len % 2 !== 0) isOdd = true

  for (let i = 0; i < len; i++) {
    if (isOdd && i === Math.floor(len / 2)) continue

    if (palindromeArray[i] != "a") {
      palindromeArray[i] = "a"
      return palindromeArray.join("")
    }
  }

  palindromeArray[len-1] = "b"
  return palindromeArray.join("")
};