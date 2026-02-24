Function.prototype.myApply = function (
  context: any,
  argsArray: Array<any> = [],
) {
  context =
    context === null || context === undefined ? globalThis : Object(context);

  const fnSymbol = Symbol();
  context[fnSymbol] = this;

  const result = context[fnSymbol](...argsArray);

  delete context[fnSymbol];
  return result;
};

Function.prototype.myCall = function (context: any, ...args: any) {
  context =
    context === null || context === undefined ? globalThis : Object(context);

  const fnSymbol = Symbol();
  context[fnSymbol] = this;

  const result = context[fnSymbol](...args);

  delete context[fnSymbol];
  return result;
};

Function.prototype.myBind = function (context: any, ...args1: any) {
  const fn = this;

  return function (...args2: any) {
    return fn.apply(context, [...args1, ...args2]);
  };
};

function introduce(greeting: string, punctuation: string) {
  console.log(`${greeting}, I am ${this.name}${punctuation}`);
}

const person = {
  name: "Alice",
};

introduce("Hello", "!");

introduce.myApply(person, ["Hello", "!"]);

introduce.myCall(person, "Hello", "!");

const boundFn = introduce.myBind(person, "Hello");
console.log(boundFn("?"));
