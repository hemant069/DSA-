// Optimal approch

let arr = [4, 2, 2, 6, 4];

let k = 6;
let xorr = 0;
let count = 0;

let map = new Map();
map.set(xorr, 1);

for (let i = 0; i < arr.length; i++) {
  xorr = xorr ^ arr[i];

  let x = xorr ^ k;

  count += map.get(x) || 0;

  let val = map.get(xorr);

  map.set(xorr, (val || 0) + 1);
}

console.log(count);
