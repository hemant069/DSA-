// Brute force

let ans = 1;
let n = 3;
let m = 27;

for (let i = 1; i <= n; i++) {
  ans = ans * n;
}

if (ans == m) {
  console.log(n);
} else {
  console.log(-1);
}

// Optimal solution

function NthRoot() {
  let n = 4;
  let m = 256;

  let low = 1;

  let high = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (Math.pow(mid, n) == m) {
      return mid;
    } else if (Math.pow(mid, n) < m) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(NthRoot());
