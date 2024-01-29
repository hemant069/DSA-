// Optimal solution

function possiable(arr, midDay, m, k) {
  let count = 0;
  let noOfB = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= midDay) {
      count++;
    } else {
      noOfB += Math.floor(count / k);
      count = 0;
    }
  }
  noOfB += Math.floor(count / k);
  return noOfB >= m;
}

var minDays = function (arr, m, k) {
  let minD = Infinity;
  let maxD = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    minD = Math.min(minD, arr[i]);
    maxD = Math.max(maxD, arr[i]);
  }

  if (arr.length >= m * k) {
    let low = minD;
    let high = maxD;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (possiable(arr, mid, m, k)) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return low;
  } else {
    return -1;
  }
};
