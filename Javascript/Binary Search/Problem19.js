let weights = [1, 2, 3, 1, 1];
let days = 4;

let maxWeight = -Infinity;
let maxCapcity = 0;
for (i = 0; i < weights.length; i++) {
  maxWeight = Math.max(maxWeight, weights[i]);
  maxCapcity += weights[i];
}

while (maxWeight <= maxCapcity) {
  let requireDays = find(weights, maxWeight);

  if (requireDays <= days) {
    console.log(maxWeight);
    break;
  }
  maxWeight++;
}

function find(weights, maxWeight) {
  let days = 1;
  let load = 0;
  for (let i = 0; i < weights.length; i++) {
    if (load + weights[i] > maxWeight) {
      days += 1;
      load = weights[i];
    } else {
      load += weights[i];
    }
  }
  return days;
}

// Optimal and paassed solution

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let maxWeight = -Infinity;
  let maxCapcity = 0;
  for (i = 0; i < weights.length; i++) {
    maxWeight = Math.max(maxWeight, weights[i]);
    maxCapcity += weights[i];
  }
  let low = maxWeight;
  let high = maxCapcity;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (find(weights, mid) <= days) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;

  function find(weights, maxWeight) {
    let days = 1;
    let load = 0;
    for (let i = 0; i < weights.length; i++) {
      if (load + weights[i] > maxWeight) {
        days += 1;
        load = weights[i];
      } else {
        load += weights[i];
      }
    }
    return days;
  }
};
