/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    //   let temp=""
    let map = new Map();
    for (let j = i; j < str.length; j++) {
      if (map.get(str[j])) {
        let val = map.get(str[j]);
        map.set(str[j], val + 1);
      } else {
        map.set(str[j], 1);
      }
      let arr = Array.from(map.values());
      let min = Math.min(...arr);
      let max = Math.max(...arr);
      sum += max - min;
    }
    //console.log(temp)
  }
  return sum;
};
