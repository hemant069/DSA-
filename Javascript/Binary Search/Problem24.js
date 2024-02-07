let arr = [1, 2, 3, 4, 5];
let k = 3;

let minimumPossiable = -Infinity; // max of Array
let sum = 0; // max possiable answer

for (let i = 0; i < arr.length; i++) {
  minimumPossiable = Math.max(minimumPossiable, arr[i]);
  sum += arr[i];
}

for (let i = minimumPossiable; i < sum; i++) {
  if (isPossiable(arr, i) == k) {
    console.log(i);
    break;
  }
}

function isPossiable(arr, sub) {
  let subarray = 1;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] <= sub) {
      sum += arr[i];
    } else {
      subarray++;
      sum = arr[i];
    }
  }
  return subarray;
}

// Optimal solution using binary search

let low = minimumPossiable;
let high = sum;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);

  if (isPossiable(arr, mid) > k) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}
console.log(low);

function isPossiable(arr, mid) {
  let subarray = 1; // initial subarray should be one
  let maxsum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (maxsum + arr[i] <= mid) {
      maxsum += arr[i];
    } else {
      subarray++;
      maxsum = arr[i];
    }
  }
  return subarray;
  // body...
}
