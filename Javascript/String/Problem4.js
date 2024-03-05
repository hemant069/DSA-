/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs = strs.sort();

  let s1 = strs[0];
  let s2 = strs[strs.length - 1];

  let id = 0;

  while (id <= s1.length && id <= s2.length) {
    if (s1[id] == s2[id]) {
      id++;
    } else {
      break;
    }
  }
  return s1.substring(0, id);
};
