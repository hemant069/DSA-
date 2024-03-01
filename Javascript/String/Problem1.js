// Input: s = "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

var removeOuterParentheses = function (s) {
  let str = s.split("");

  let ans = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" && count == 0) {
      count++;
    } else if (str[i] == "(" && count >= 1) {
      ans += "(";
      count++;
    } else if (str[i] == ")" && count == 1) {
      count--;
    } else if (str[i] == ")" && count > 1) {
      count--;
      ans += ")";
    }
  }

  return ans;
};
