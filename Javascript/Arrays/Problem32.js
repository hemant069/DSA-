// Brute Force

let arr = [9, -3, 3, -1, 6, -5];

let map = new Map();

let sum = 0;
let maxLen = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];

  if (sum == 0) {
    maxLen = i + 1;
  } else if (map.has(sum)) {
    let val = map.get(sum);
    maxLen = Math.max(maxLen, i - val);
  } else {
    map.set(sum, i);
  }
}

console.log(maxLen, map);
