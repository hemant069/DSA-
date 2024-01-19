// brute force solution
function search(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    } else {
      if (arr[i] > x) {
        return i;
      }
    }
  }
}
var searchInsert = function (arr, x) {
  if (search(arr, x) == undefined) {
    return arr.length;
  } else {
    return search(arr, x);
  }
};

// Optimal approch  Lower bound

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let ans = nums.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};
