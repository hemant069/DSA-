// Brute Force solution

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let k = 1;

  while (h) {
    let sum = 0;

    for (let i = 0; i < piles.length; i++) {
      sum += Math.ceil(piles[i] / k);
    }
    if (sum <= h) {
      return k;
    }
    k++;
  }
};

// Optimal solution using binary search

function binarySearch(piles, maxB, h) {
  let low = 1;
  let high = maxB;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let totalTime = Find(piles, mid);

    if (totalTime <= h) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

function Find(piles, mid) {
  let totalTime = 0;

  for (let i = 0; i < piles.length; i++) {
    totalTime += Math.ceil(piles[i] / mid);
  }
  return totalTime;
}

var minEatingSpeed = function (piles, h) {
  let maxBananas = -Infinity;
  for (let i = 0; i < piles.length; i++) {
    maxBananas = Math.max(maxBananas, piles[i]);
  }

  return binarySearch(piles, maxBananas, h);
};
