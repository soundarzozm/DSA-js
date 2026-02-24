function throttle(fn: Function, limit: number): Function {
  let inThrottle: boolean = false;

  return function (...args: any) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;

      return setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

function callPerson(person: string) {
  console.log(`Calling ${person}`);
}

const throttledCallPerson = throttle(callPerson, 2000);
throttledCallPerson("Hello");
throttledCallPerson("Hello2");
throttledCallPerson("Hello3");
// hello
