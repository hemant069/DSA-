// Brute Force Approch

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let newmatrix = new Array(matrix.length)
  .fill()
  .map(() => Array(matrix[0].length).fill(0));

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    newmatrix[j][matrix.length - 1 - i] = matrix[i][j];
  }
}

console.log(newmatrix);

// Optimal Solution

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j]; // we are swaping here
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse(); // reverse the array
  }

  return matrix;
};
