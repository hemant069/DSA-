// Brute Force

var searchRange = function (arr, k) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == k) {
      ans.push(i);
      break;
    }
  }

  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] == k) {
      ans.push(i);
      break;
    }
  }

  if (ans.length == 0) {
    return [-1, -1];
  } else {
    return ans;
  }
};

// Optimal solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
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
var searchRange = function (nums, target) {
  return [lowerBound(nums, target), upperBound(nums, target)];
};
