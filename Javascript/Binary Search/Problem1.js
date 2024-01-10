

// Normal way of binary search


var search = function(nums, target) {
    let low=0;
    let high=nums.length-1;

    while(low<=high){

        let mid=Math.floor((low+high)/2);

        if(nums[mid]===target){
            return mid;
        }
        else if(nums[mid]<target){
            low=mid+1;
        }
        else{
            high=mid-1;
        }


    }
    return -1
};


// Recurvise way to solve binary search


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return  binarySearch(nums,0,nums.length-1,target)
    
  };
  function binarySearch(nums, low, high, target) {
      if (low > high) return -1; // Base case.
  
      // Perform the steps:
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) return mid;
      else if (target > nums[mid])
          return binarySearch(nums, mid + 1, high, target);
      return binarySearch(nums, low, mid - 1, target);
  }
  