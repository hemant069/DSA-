// Optimal solution

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    //    min=Math.min(min,nums[i]);
    max = Math.max(max, nums[i]);
  }

  let low = 1;
  let high = max;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (find(nums, mid, threshold)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

function find(nums, mid, limit) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += Math.ceil(nums[i] / mid);
  }
  return sum <= limit;
}
