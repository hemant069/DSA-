/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (arr) {
  let low = 1;

  let high = arr.length - 2;

  let firtpre = -Infinity;
  let lastel = -Infinity;

  if (arr.length == 1) {
    return 0;
  }

  if (firtpre < arr[0] && arr[0] > arr[1]) {
    return 0;
  }

  if (
    arr[arr.length - 2] < arr[arr.length - 1] &&
    arr[arr.length - 1] > lastel
  ) {
    return arr.length - 1;
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (arr[mid] > arr[mid - 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};
