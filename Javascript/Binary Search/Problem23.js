let arr = [12, 34, 67, 90];
let m = 2;

let max = -Infinity;

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  max = Math.max(max, arr[i]);
  sum += arr[i];
}

for (let i = max; i <= sum; i++) {
  if (isPossiable(arr, i, m) == m) {
    console.log(i);
    break;
  }
}
// console.log(max)

function isPossiable(arr, pages, m) {
  let student = 1;
  let pagesStudent = 0;
  for (let i = 0; i < arr.length; i++) {
    if (pagesStudent + arr[i] <= pages) {
      pagesStudent += arr[i];
    } else {
      student++;
      pagesStudent = arr[i];
    }
  }

  return student;
  // body...
}

// Optimal solution

let low = max;
let high = sum;
let ans = -1;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);

  if (isPossiable(arr, mid) == m) {
    high = mid - 1;
  } else {
    low = mid + 1;
  }
}
console.log(low);

function isPossiable(arr, pages) {
  let student = 1;
  let pagesStudent = 0;

  for (let i = 0; i < arr.length; i++) {
    if (pagesStudent + arr[i] <= pages) {
      pagesStudent += arr[i];
    } else {
      student++;
      pagesStudent = arr[i];
    }
  }
  return student;
  // body...
}
