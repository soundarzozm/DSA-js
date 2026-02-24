function debounce(fn: Function, delay: number): Function {
  let timerId: number;

  return function (...args: any) {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function callPerson(person: string) {
  console.log(`Calling ${person}`);
}

const debouncedCallPerson = debounce(callPerson, 2000);
debouncedCallPerson("Hello");
debouncedCallPerson("Hello2");
debouncedCallPerson("Hello3");
// hello3
