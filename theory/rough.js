let num = 0;

let add = (a) => {
  num += a;
  console.log(num);

  return add;
};

// function add(a) {
//   num += a;
//   console.log(num);

//   return add;
// }

add(2)(3)(3);

const test = () => {
  console.log("TESTING");
};

// const bruh = new test();
// console.log(bruh);

console.log(test.prototype);
