// Brute force

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (arr, target) {
  if (arr.length <= 3) {
    return [];
  }

  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
    }
  }
  if (arr.length == count) {
    let sum = 0;
    let newans = [];
    for (let i = 0; i < arr.length; i++) {
      newans.push(arr[i]);
      sum += arr[i];
      if (sum == target) {
        break;
      }
    }
    return [[...newans]];
  } else {
    let newSet = new Set();
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          for (let l = k + 1; l < arr.length; l++) {
            if (arr[i] + arr[j] + arr[k] + arr[l] == target) {
              let temp = [arr[i], arr[j], arr[k], arr[l]];
              temp.sort((a, b) => a - b);
              newSet.add(temp);
            }
          }
        }
      }
    }
    let ans = Array.from(newSet);
    return ans;
  }
};

// Optimal solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (arr, target) {
  arr.sort((a, b) => a - b);

  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (j > i + 1 && arr[j] == arr[j - 1]) {
        continue;
      }
      let k = j + 1;
      let l = arr.length - 1;

      while (k < l) {
        let sum = arr[i];
        sum += arr[j];
        sum += arr[k];
        sum += arr[l];

        if (sum == target) {
          let temp = [arr[i], arr[j], arr[k], arr[l]];
          ans.push(temp);
          k++;
          l--;
          while (k < l && arr[k] == arr[k - 1]) {
            k++;
          }
          while (k < l && arr[l] == arr[l + 1]) {
            l--;
          }
        } else if (sum < target) {
          k++;
        } else {
          l--;
        }
      }
    }
  }

  return ans;
};
