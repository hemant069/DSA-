/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (str) {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }
  let sortedArr = Array.from(map.keys()).sort(
    (a, b) => map.get(b) - map.get(a)
  );
  let res = "";
  for (let char of sortedArr) {
    res += char.repeat(map.get(char));
  }
  return res;
};
