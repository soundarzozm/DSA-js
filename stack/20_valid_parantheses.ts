import { Stack } from "./index";

function isValid(s: string): boolean {
  const inverse = {
    "(": ")",
    ")": "(",
    "]": "[",
    "}": "{",
    "[": "]",
    "{": "}",
  };

  let stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      if (stack.size() === 0) return false;

      if (inverse[s[i]] !== stack.pop()) return false;
    }
  }

  if (stack.size() !== 0) return false;
  return true;
}

let inputString = "()";
console.log(isValid(inputString));
