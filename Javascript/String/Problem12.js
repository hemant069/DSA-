let str = "abcad";

let k = 2;
let count = 0;
for (let i = 0; i < str.length; i++) {
  for (let j = i; j <= str.length; j++) {
    let sub = str.slice(i, j);
    if (sub.length == k) {
      count++;
    }
  }
}

console.log(count);
