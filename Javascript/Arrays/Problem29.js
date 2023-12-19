// 1 Brute Force solution

let arr = [1, 2, 2, 3, 2];

let len = Math.floor(arr.length / 3);
let ans = [];
for (let i = 0; i < arr.length; i++) {
  let count = 0;
  let num = arr[i];
  if (ans.length == 0 || ans[0] !== num) {
    for (let j = 0; j < arr.length; j++) {
      if (num == arr[j]) {
        count++;
      }
    }
  }
  if (count > len) {
    ans.push(num);
  }
}
console.log(ans);

// better approch

var majorityElement = function (nums) {
  let map = new Map();
  let len = Math.floor(nums.length / 3);
  console.log(len);
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  let ans = [];
  for (let [key, val] of map) {
    if (val > len) {
      ans.push(key);
    }
  }
  return ans;
};
