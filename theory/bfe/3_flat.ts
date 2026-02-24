function flat(arr: any[], depth = 1) {
  if (depth === 0) return arr;
  const result = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result.push(...flat(element, depth - 1));
    } else if (element === undefined || typeof element === "number") {
      result.push(element);
    }
  });

  return result;
}

// forEach skips empty elements
// let element of array does not
// wtf
