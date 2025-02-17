import mockData from "./mock/nestedObject.json";

interface SearchParam {
  key: string;
  value: any;
}

const searchParams: Array<SearchParam> = [
  {
    key: "type",
    value: "Devil's Food",
  },
  {
    key: "type",
    value: "Chocolate with Sprinkles",
  },
];

// Types you should check
// - Array
// - Object

const searchObject = (key: string, value: any, jsObject: any): boolean => {
  if (typeof jsObject === "object" && jsObject !== null) {
    if (Array.isArray(jsObject)) {
      // Iterate through array elements
      return jsObject.some((element) => searchObject(key, value, element));
    } else {
      // Iterate through object entries
      return Object.entries(jsObject).some(([entryKey, entryValue]) => {
        if (entryKey === key && entryValue === value) {
          console.log("Found:", key, value, jsObject);
          return true;
        }
        return searchObject(key, value, entryValue);
      });
    }
  }

  // Base case: Not an object or array
  return false;
};

// Process each search parameter
searchParams.forEach((element) => {
  console.log(`Searching for ${element.key}: ${element.value}`);
  const result = searchObject(element.key, element.value, mockData);
  console.log(`Result: ${result}`);
});
