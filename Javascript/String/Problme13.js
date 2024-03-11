/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longest = "";
  if (s.length == 0) {
    longest = "";
  }
  for (let i = 0; i < s.length; i++) {
    sol(i, i);
    sol(i, i + 1);
  }
  return longest;
  function sol(left, right) {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
      left--;
      right++;
    }
    let currentString = s.slice(left + 1, right);
    longest = currentString.length > longest.length ? currentString : longest;
  }
};
