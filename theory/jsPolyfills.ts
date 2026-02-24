// .call() allows you to execute a function and manually specify what the this keyword refers to inside that function.
// .bind() creates and returns a new function. This new function has its this keyword permanently locked (bound) to the value you pass in. You can then execute this new function later.

const user = {
  name: "ZOZM",
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

user.greet();
user.greet = user.greet.bind(user);

setTimeout(user.greet, 1000);

user.greet.call(user);
