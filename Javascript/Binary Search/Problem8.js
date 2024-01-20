// Brute Force

let arr = [5, 1, 3];

let k = 3;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == k) {
    return i;
  }
}
return -1;

// Optimal solution

var search = function (arr, k) {
  let low = 0;

  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === k) {
      return mid;
    }
    // Left half
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= k && k <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // right half
    else {
      if (arr[mid] <= k && k <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
};
