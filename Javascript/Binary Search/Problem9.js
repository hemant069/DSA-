let arr = [1, 0, 1, 1, 1];

let k = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == k) {
    return true;
  }
}
return false;

// Optimal solution
var search = function (arr, k) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === k) {
      return true;
    }
    if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
      low = low + 1;
      high = high - 1;
      continue;
    }
    //left half
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= k && k <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] <= k && k <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false;
};
