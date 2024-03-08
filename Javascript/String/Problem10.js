var romanToInt = function (str) {
  let map = new Map();

  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);

  let num = map.get(str[str.length - 1]);

  for (let i = str.length - 2; i >= 0; i--) {
    if (map.get(str[i]) >= map.get(str[i + 1])) {
      num += map.get(str[i]);
    } else {
      num -= map.get(str[i]);
    }
  }
  return num;
};
