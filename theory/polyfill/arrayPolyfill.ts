// Array.prototype.map
// map(callbackFn, thisArg?)
// The callbackFn is called with three arguments
// 1. element - current element being processed
// 2. index - index of current element
// 3. array - array on which map was called
Array.prototype.myMap = function (callback: Function, thisArg?: any) {
  const n = this.length;
  const result = new Array(n);

  for (let i = 0; i < n; i++) {
    if (i < this.length) {
      const item = callback.call(thisArg, this[i], i, this);
      result[i] = item;
    }
  }

  return result;
};

// Array.prototype.filter
// filter(callbackFn, thisArg?)
// The callbackFn is called with three arguments
// 1. element - current element being processed
// 2. index - index of current element
// 3. array - array on which map was called
Array.prototype.myFilter = function (callback: Function, thisArg?: any) {
  const n = this.length;
  const result = new Array();

  for (let i = 0; i < n; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

// Array.prototype.map
// reduce(callbackFn, initialValue?)
// The callbackFn is called with three arguments
// 1. accumulator - value resulting from the previous call
// 2. currentValue - value of the current element
// 3. currentIndex - index position of currentValue in the array
// 4. array - array reduce() was called upon
Array.prototype.myReduce = function (callback: Function, initialValue?: any) {
  const n = this.length;
  if (n === 0 && initialValue === undefined)
    throw new TypeError("Reduce of empty array with no initial value");

  let accumulator = initialValue;
  let startIndex = 0;

  if (initialValue === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < n; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

let myList: number[] = [1, 2, 3];
myList = myList.myMap((element: number) => element * 2);
console.log(myList);

const ans = myList.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
);
console.log(ans);

Array.prototype.myFlat = function (depth: number = 1) {
  if (depth <= 0) return this.slice(); // To create a new array
  const n = this.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    if (i in this) {
      if (Array.isArray(this[i])) {
        result.push(...this[i].myFlat(depth - 1));
      } else {
        result.push(this[i]);
      }
    }
  }

  return result;
};

let myDeepList = [1, 2, [3, 4], [5, [6, 7]]];
console.log(myDeepList.myFlat());

Object.prototype.flat = function () {
  const result = {};

  for (const parent in this) {
    if (!this.hasOwnProperty(parent)) continue;
    // Check if it's a pure object
    if (typeof this[parent] === "object" && !Array.isArray(this[parent])) {
      const buffer = this[parent].flat();
      for (let child in buffer) {
        if (buffer.hasOwnProperty(child)) {
          result[parent + "." + child] = buffer[child];
        }
      }
    } else {
      result[parent] = this[parent];
    }
  }

  return result;
};

const myObject = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: "+91-999999999",
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: {
      name: "Akshay Saini",
      platforms: ["YouTube", "LinkedIn"],
    },
  },
};

console.log(myObject.flat());
