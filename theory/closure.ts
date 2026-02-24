// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state
// This access remains available even after the outer function has finished executing.

function outer() {
  const outerVar = "Hello from outside";

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

const myClosure = outer();
myClosure();

function myBank() {
  let balance = 0;

  function deposit(amount: number) {
    balance += amount;
    console.log("Deposit success", balance);
  }

  function withdraw(amount: number) {
    if (amount > balance) {
      console.log("Not enough balance", balance);
      return;
    }
    balance -= amount;
    console.log("Withdrawal successful", balance);
  }

  return {
    deposit,
    withdraw,
  };
}

const { deposit, withdraw } = myBank();
deposit(10);
withdraw(5);
withdraw(10);

// Currying
function multiplier(x: number) {
  return function (y: number) {
    return x * y;
  };
}

const doubler = multiplier(2);
console.log(doubler(4));

function once(fn: Function) {
  let hasRun = false;
  let result: any;

  return function (...args: any[]) {
    if (hasRun) {
      return result;
    }
    result = fn(...args);
    hasRun = true;
    return result;
  };
}

const runOnce = once((a: number, b: number) => a + b);
console.log(runOnce(5, 10)); // 15
console.log(runOnce(2, 10)); // 15

function memoize(fn: Function) {
  const cache = {};

  return function (arg: any) {
    if (!(arg in cache)) {
      console.log("Slowly found");
      cache[arg] = fn(arg);
      return cache[arg];
    }
    console.log("Quickly found");
    return cache[arg];
  };
}

const squareFinder = memoize((a: number) => a * a);
console.log(squareFinder(5));
console.log(squareFinder(10));
console.log(squareFinder(5));

// Infinite currying
function sum(a: number) {
  let total = a;

  return function inner(b?: number) {
    if (b === undefined) {
      return total;
    }
    total += b;
    return inner;
  };
}

console.log(sum(1)(2)(3)());
console.log(sum(5)(10)());
