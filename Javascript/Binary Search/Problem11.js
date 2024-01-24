let arr = [3, 4, 5, 1, 2];

// brute force solution
for (let i = 0; i < arr.length; i++) {
  let diff = arr[i + 1] - arr[i];

  if (diff !== 1) {
    console.log(i + 1);
    break;
  }
}

// bit better brute force solution

let min = Infinity;
let rotate = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
    rotate = i;
  }
}

console.log(rotate);

// Optimal solution  binary search

function findRotate() {
  let arr = [3, 4, 5, 1, 2];

  let low = 0;
  let high = arr.length - 1;
  let min = Infinity;
  let rotate = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[low] <= arr[mid]) {
      //min=Math.min(min,arr[low]);
      if (arr[low] < min) {
        min = arr[low];
        rotate = low;
      }
      low = mid + 1;
    } else {
      //min=Math.min(min,arr[mid]);
      if (arr[mid] < min) {
        min = arr[mid];
        rotate = mid;
      }
      high = mid + 1;
    }
  }

  console.log(rotate);
}
