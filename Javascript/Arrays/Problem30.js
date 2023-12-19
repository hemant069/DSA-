// Brute Force
let nums = [-1, 0, 1, 2, -1, -4];
var threeSum = function (nums) {
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          let temp = [nums[i], nums[j], nums[k]];
          temp.sort((a, b) => a - b);
          ans.push(temp);
        }
      }
    }
  }

  let newSet = new Set(ans.map(JSON.stringify));

  ans = Array.from(newSet).map(JSON.parse);
  return ans;
};

// Better approch

var threeSum = function (arr) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    let hashset = new Set();

    for (let j = i + 1; j < arr.length; j++) {
      let third = -(arr[j] + arr[i]);

      if (hashset.has(third)) {
        let temp = [arr[i], arr[j], third];
        temp.sort((a, b) => a - b);
        ans.push(temp);
      } else {
        hashset.add(arr[j]);
      }
    }
  }

  let newset = new Set(ans.map(JSON.stringify));
  ans = Array.from(newset).map(JSON.parse);

  return ans;
};

//Optimal approch

var threeSum = function (arr) {
  arr.sort((a, b) => a - b);

  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      //console.log(sum)
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        let temp = [arr[i], arr[j], arr[k]];
        //console.log(temp)
        ans.push(temp);

        j++;
        k--;
        while (j < k && arr[j] == arr[j - 1]) {
          j++;
        }
        while (j < k && arr[k] == arr[k + 1]) {
          k--;
        }
      }
    }
  }

  return ans;
};
