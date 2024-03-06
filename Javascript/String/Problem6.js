var rotateString = function (s, goal) {
  let str = s + s;

  if (s.length !== goal.length) {
    return false;
  }
  if (str.includes(goal)) {
    return true;
  } else {
    return false;
  }
};
