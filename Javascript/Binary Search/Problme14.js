//Brute force solution
let n = 36;
let newans = 0;
for (let i = 1; i <= n; i++) {
  let val = i * i;

  if (val <= n) {
    ans = i;
  } else {
    break;
  }
}

// Optimal solution
let low = 1;

let high = n - 1;
let ans = 0;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);

  if (mid * mid <= n) {
    ans = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}
console.log(ans);
