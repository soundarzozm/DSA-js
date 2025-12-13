function validateCoupons(
  code: string[],
  businessLine: string[],
  isActive: boolean[],
): string[] {
  let n = code.length;
  let ans = [];

  let map = new Map();

  let categories = ["electronics", "grocery", "pharmacy", "restaurant"];

  for (let category of categories) {
    map.set(category, []);
  }

  for (let i = 0; i < n; i++) {
    if (isCouponValid(code[i]) && isActive[i] && map.has(businessLine[i])) {
      let val = map.get(businessLine[i]);
      val.push(code[i]);
      map.set(businessLine[i], val);
    }
  }

  for (let [key, value] of map) {
    if (value.length > 0) ans.push(...value.sort());
  }

  return ans;
}

function isCouponValid(code: string) {
  if (code.length === 0) return false;

  for (let i = 0; i < code.length; ++i) {
    let ascii = code.charCodeAt(i);
    if (
      (ascii >= 48 && ascii <= 57) ||
      (ascii >= 65 && ascii <= 90) ||
      (ascii >= 97 && ascii <= 122) ||
      ascii === 95
    )
      continue;
    else return false;
  }

  return true;
}
