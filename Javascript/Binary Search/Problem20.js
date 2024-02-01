let vec = [4, 7, 9, 10];
let k = 1;

for (let i = 0; i < vec.length; i++) {
  if (vec[i] <= k) {
    k++;
  } else {
    break;
  }
}

console.log(k);

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let missingEle = arr[mid] - (mid + 1);

    if (missingEle < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high + k + 1;
};
