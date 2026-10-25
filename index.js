// function step1(callback) {
//   console.log("A");
//   setTimeout(() => {
//     console.log("B");
//     callback(null, "Step 1 Done");
//   }, 1000);
//   console.log("C");
// }

// console.log("START");
// step1((err, data) => {
//   console.log("D:", data);
// });
// console.log("END");

// START
// A
// C
// END
// B
// D: Step 1 Done

function doubleNumber(num, callback) {
  setTimeout(() => {
    if (typeof num !== "number") {
      callback(new Error("Must be a number"), null);
    } else {
      callback(null, num * 2);
    }
  }, 500);
}

function quadrupleNumber(num, callback) {}

function callback(err, data) {
  if (err !== null) {
    console.error(err);
  } else {
    console.log(data);
  }
}

function allSettled(promises) {
  return new Promise((resolve, reject) => {
    const n = promises.length;
    let results = new Array(n);

    if (n === 0) {
      resolve(promises);
      return;
    }

    let completed = 0;

    for (let i = 0; i < n; i++) {
      const promise = promises[i];
      Promise.resolve(promise)
        .then((value) => (results[i] = { status: "fulfilled", value }))
        .catch((reason) => (results[i] = { status: "rejected", reason }))
        .finally(() => {
          completed = completed + 1;
          if (completed === n) return results;
        });
    }
  });
}

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (const item of promises) {
      Promise.resolve(item).then(resolve, reject);
    }
  });
}

const obj = {
  name: "Blackhawk",
  getName: function () {
    return this.name;
  },
  getNameArrow: () => {
    return this.name;
  },
};

const fn1 = obj.getName;
const fn2 = obj.getName.bind({ name: "BoundObject" });

console.log(obj.getName()); // Blackhawk
console.log(obj.getNameArrow()); // undefined
console.log(fn1()); // undefined
console.log(fn2()); // BoundObject

async function first() {
  console.log('1');
  await second();
  console.log('2');
}

async function second() {
  console.log('3');
  return 'done';
}

console.log('4');

first().then(() => {
  console.log('5');
});

Promise.resolve()
  .then(() => console.log('6'))
  .then(() => console.log('7'));

console.log('8');

call stack
micro
macro

console
4
1
3
8
5

// Arrow functions inherit 'this' from the enclosing lexical scope
// now wtf is lexical scope?
//
// Function declarations hoist above var delcarations
//
// Object.create(obj) creates an empty object whose prototype points to obj
//
// 1. Was it called with `new`?
//    👉 `this` = the newly constructed object.

// 2. Was it called with `.call()`, `.apply()`, or `.bind()`?
//    👉 `this` = the explicitly provided object.

// 3. Was it called as an object method (`obj.fn()`)?
//    👉 `this` = the object to the left of the dot (`obj`).

// 4. Was it called standalone (`fn()`)?
//    👉 `this` = `undefined` (in strict mode) or `window`/`global` (in non-strict mode).

// * EXCEPTION - Arrow Functions:
//    Ignore rules 1-4. Arrow functions inherit `this` from the enclosing lexical scope where they were written.
//
// Only functions and code blocks (like if, for, or bare {} statements) create lexical scopes.
//
// Both Object.seal and Object.freeze are shallow by default. To freeze nested objects, you need a recursive "deep freeze" utility.
// seal allows modifying existing properties but freeze does not allow. both do not allow deleting existing properties
//
// WeakMaps only allow objects as keys.
// It is not iterable
//
//
// Q1
// 4, 1, 7, 2, 5, 3, 6

Array.prototype.myReduce = function (callback, initialValue) {
  let startIndex = 0
  const n = this.length
  let value = initialValue

  if (initialValue === undefined && n === 0) {
    throw new TypeError("Empty array with no initial value")
  }

  if (initialValue === undefined) {
    value = this[0]
    startIndex = 1
  }

  for (let i = startIndex; i < n; i++) {
    value = callback(value, this[i], i, this)
  }

  return value
}

const debounce = (fn, delay, immediate = false) => {
  let timerId = null

  return function debouncedFn(...args) {
    const callImmediately = immediate && !timerId

    if (timerId) clearTimeout(timerId)

    timerId = setTimeout(() => {
      timerId = null;
        if (!immediate) {
          fn.apply(this, args);
        }
    }, delay)

    if (callImmediately) {
      fn.apply(this, args)
    }
  }
}

Promise.myAll = (promises) => {
  return new Promise((resolve, reject) => {
    const n = promises.length

    if (n === 0) {
      resolve(promises)
      return
    }

    let results = new Array(n)
    let resolved = 0

    for (let i = 0; i < n; i++) {
      Promise.resolve(promises[i]).then((val) => {
        results[i] = val
        resolved++
        if (resolved === n) {
          resolve(results)
        }
      }).catch((err) => {
        reject(err)
      })
    }
  })
}
