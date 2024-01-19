let arr = [3, 4, 4, 7, 8, 10];

let x = 5;

function floorval(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] <= x) {
      ans = arr[mid];

      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  console.log(ans);
}

function ceilVal(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= x) {
      ans = arr[mid];

      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  console.log(ans);
}

floorval(arr, x);
ceilVal(arr, x);
