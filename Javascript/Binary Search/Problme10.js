var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let min = Infinity;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[low] <= nums[mid]) {
      min = Math.min(min, nums[low]);
      low = mid + 1;
    } else {
      min = Math.min(min, nums[mid]);
      high = mid - 1;
    }
  }
  return min;
};
