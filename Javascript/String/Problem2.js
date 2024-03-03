var reverseWords = function (s) {
  let str = s.split(" ");

  let temp = "";

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== "") {
      temp += str[i] + " ";
    }
  }
  return temp.trim();
};
