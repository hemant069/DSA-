// Brute force solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let val = map.get(nums[i]);
      map.set(nums[i], val + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  // console.log(map)

  for ([key, val] of map) {
    // console.log(key,val)
    if (val == 1) {
      return key;
    }
  }
};

// Optimal solution using binary search
var singleNonDuplicate = function (nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  if (nums[0] !== nums[1]) {
    return nums[0];
  }
  if (nums[nums.length - 1] !== nums[nums.length - 2]) {
    return nums[nums.length - 1];
  }

  let low = 1;
  let high = nums.length - 2;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
      return nums[mid];
    }
    if (
      (mid % 2 == 1 && nums[mid] == nums[mid - 1]) ||
      (mid % 2 == 0 && nums[mid] == nums[mid + 1])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};
