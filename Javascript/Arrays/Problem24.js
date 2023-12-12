// 1 Brute Force

let arr = [100, 4, 200, 1, 3, 2];
for (let i = 0; i < arr.length; i++) {
  let x = arr[i];
  let count = 1;
  while (linearSearch(arr, x + 1) == true) {
    x = x + 1;
    count++;
  }

  longest = Math.max(longest, count);
}

function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return true;
    }
  }
  return false;
}

// 2 Better Solution

let longest = 1;

arr.sort((a, b) => a - b);
let count = 0;
let lastsmaller = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] - 1 == lastsmaller) {
    count++;
    lastsmaller = arr[i];
  } else if (arr[i] != lastsmaller) {
    count = 1;
    lastsmaller = arr[i];
  }
  longest = Math.max(longest, count);
}

return longest;

// 3 Optimal Solution

let longest = 1;

let count = 0;

let st = new Set();

for (let i = 0; i < arr.length; i++) {
  st.add(arr[i]);
}

for (let it of st) {
  if (!st.has(it - 1)) {
    count = 1;
    let x = it;
    while (st.has(x + 1)) {
      x = x + 1;
      count++;
    }
    longest = Math.max(longest, count);
  }
}

console.log(longest);
