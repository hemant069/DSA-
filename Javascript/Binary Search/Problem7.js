// Optimal solution

let arr = [2, 2, 3, 3, 3, 3, 4];

let k = 3;

function lowerBound(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let lower = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == k) {
      lower = mid;
      high = mid - 1;
    } else if (arr[mid] < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return lower;
}

function upperBound(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let upper = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == k) {
      upper = mid;
      low = mid + 1;
    } else if (arr[mid] < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return upper;
}

function find(arr, k) {
  let up = upperBound(arr, k);
  let low = lowerBound(arr, k);

  console.log(up - low + 1);
}

find(arr, k);
