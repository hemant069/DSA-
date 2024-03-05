var largestOddNumber = function (num) {
  let flag = false;

  let temp = "";

  for (let i = num.length; i >= 0; i--) {
    if (parseInt(num[i]) % 2 == 1) {
      flag = true;
    }
    if (flag) {
      temp += num[i];
    }
  }
  return temp.split("").reverse().join("");
};
