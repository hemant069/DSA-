/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;

  let ans = [];

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      //console.log(matrix[top][i])
      ans.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      //console.log(matrix[i][right])
      ans.push(matrix[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        //console.log(matrix[bottom][i])
        ans.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        //console.log(matrix[i][left])
        ans.push(matrix[i][left]);
      }
      left++;
    }
  }
  return ans;
};
