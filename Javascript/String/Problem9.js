/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (str) {
  str = str.split("");

  let count = 0;
  let max = -Infinity;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" && count == 0) {
      count++;
    } else if (str[i] == "(" && count >= 1) {
      count++;
    }
    if (max < count) {
      max = count;
    } else if (str[i] == ")") {
      count--;
    }
  }
  return max;
};
