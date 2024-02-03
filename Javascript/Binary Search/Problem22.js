let arr = [0, 3, 4, 7, 10, 9];

let k = 4;

arr.sort((a, b) => a - b);

let min = Infinity;
let max = -Infinity;

for (let i = 0; i < arr.length; i++) {
  min = Math.min(min, arr[i]);
  max = Math.max(max, arr[i]);
}

for (let i = 1; i <= max - min; i++) {
  console.log(i);
  if (isPossiable(arr, i, k) == true) {
    continue;
  } else {
    console.log(i - 1);
    break;
  }
}

function isPossiable(arr, dist, k) {
  let ctncows = 1;
  let last = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - last >= dist) {
      ctncows++;
      last = arr[i];
    }
  }
  if (ctncows >= k) {
    return true;
  } else {
    return false;
  }
}

// Optimal solution

let arr = [0, 3, 4, 7, 10, 9];

let k = 4;

arr.sort((a, b) => a - b);

let min = Infinity;
let max = -Infinity;

for (let i = 0; i < arr.length; i++) {
  min = Math.min(min, arr[i]);
  max = Math.max(max, arr[i]);
}

let low = 1;
let high = max - min;
let ans = -1;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);

  if (isPossible(arr, mid, k) == true) {
    ans = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}
console.log(ans);

function isPossible(arr, dist, k) {
  let ctncows = 1;
  let lastcows = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - lastcows >= dist) {
      ctncows++;
      lastcows = arr[i];
    }
  }

  if (ctncows >= k) {
    return true;
  } else {
    return false;
  }
}
