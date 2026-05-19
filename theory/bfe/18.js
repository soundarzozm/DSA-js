// Given an input of array,
// which is made of items with >= 3 properties
let items = [
  { color: "red", type: "tv", age: 18 },
  { color: "silver", type: "phone", age: 20 },
  { color: "blue", type: "book", age: 17 },
];

// an exclude array made of key value pair
const excludes = [
  { k: "color", v: "silver" },
  { k: "type", v: "tv" },
];

function excludeItems(items, excludes) {
  const excludeMap = new Map();
  const filteredItems = [];

  for (let pair of excludes) {
    const key = pair.k;
    const value = pair.v;

    if (!excludeMap.has(key)) excludeMap.set(key, new Set());
    const set = excludeMap.get(key);
    set.add(value);
    excludeMap.set(key, set);
  }

  for (let item of items) {
    let valid = true;
    for (const [key, value] of Object.entries(item)) {
      if (!excludeMap.has(key)) continue;
      if (excludeMap.get(key).has(value)) {
        valid = false;
        break;
      }
    }
    if (valid) filteredItems.push(item);
  }

  return filteredItems;
}

const filteredItems = excludeItems(items, excludes);
console.log(filteredItems);
