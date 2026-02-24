function curry(fn: Function) {
  function inner(...args: number[]) {
    if (args.length >= 3) {
      return fn(...args);
    }
    return inner.bind(this, ...args);
  }

  return inner;
}

const join = (a: number, b: number, c: number) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);
const ans = [
  curriedJoin(1, 2, 3), // '1_2_3'
  curriedJoin(1)(2, 3), // '1_2_3'
  curriedJoin(1, 2)(3), // '1_2_3'
  curriedJoin(1)(2)(3), // '1_2_3'
  curriedJoin(1, 2, 3, 4), // '1_2_3'
];

console.log(ans);
