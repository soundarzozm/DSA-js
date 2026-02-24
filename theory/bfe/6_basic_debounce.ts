function debounce(func: Function, wait: number) {
  let timerId: number;

  return function (...args: any[]) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), wait);
  };
}
