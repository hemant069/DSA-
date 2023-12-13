// 1 Brute Force Approch
// Time complexity will be O(n3)
var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  for (let row = 0; row < m; row++) {
    for (let column = 0; column < n; column++) {
      if (matrix[row][column] == 0) {
        MatrixRow(matrix, m, n, row);
        MatrixColumn(matrix, m, n, column);
      }
    }
  }

  function MatrixRow(matrix, m, n, row) {
    for (let column = 0; column < n; column++) {
      if (matrix[row][column] != 0) {
        matrix[row][column] = -1;
      }
    }
  }

  function MatrixColumn(matrix, m, n, column) {
    for (let row = 0; row < m; row++) {
      if (matrix[row][column] != 0) {
        matrix[row][column] = -1;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == -1) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

// 2 Better Solution

// Time Complexity O(n2);

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let col = new Array(n).fill(0);
  let row = new Array(m).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        row[i] = -1;
        col[j] = -1;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] == -1 || col[j] == -1) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

// 3 Optimal solution

const n = matrix.length;
const m = matrix[0].length;

let col0 = 1;
// Step 1: Traverse the matrix and mark 1st row & col accordingly:
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (matrix[i][j] === 0) {
      // Mark i-th row:
      matrix[i][0] = 0;

      // Mark j-th column:
      if (j !== 0) {
        matrix[0][j] = 0;
      } else {
        col0 = 0;
      }
    }
  }
}

// Step 2: Mark with 0 from (1,1) to (n-1, m-1):
for (let i = 1; i < n; i++) {
  for (let j = 1; j < m; j++) {
    if (matrix[i][j] !== 0) {
      // Check for col & row:
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
}

// Step 3: Finally mark the 1st col & then 1st row:
if (matrix[0][0] === 0) {
  for (let j = 0; j < m; j++) {
    matrix[0][j] = 0;
  }
}
if (col0 === 0) {
  for (let i = 0; i < n; i++) {
    matrix[i][0] = 0;
  }
}

return matrix;
