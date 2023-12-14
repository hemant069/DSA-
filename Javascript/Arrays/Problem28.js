// Brute Force

let arr = [3, 1, 2, 4];

let k = 6;

let count = 0;

for (let i = 0; i < arr.length; i++) {
  let sum = 0;

  for (let j = i; j < arr.length; j++) {
    //console.log(arr[j])

    sum += arr[j];

    if (sum == k) {
      count++;
    }
  }
}

console.log(count);

// Optimal solution

let presum = 0;
let map = new Map();
let count = 0;

map.set(0, 1);

for (let i = 0; i < arr.length; i++) {
  presum += arr[i];

  if (map.has(presum - k)) {
    count += map.get(presum - k);
  }
  if (map.has(presum)) {
    let val = map.get(presum);
    map.set(presum, val + 1);
  } else {
    map.set(presum, 1);
  }
}

console.log(count);
