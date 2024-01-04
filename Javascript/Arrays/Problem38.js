/**
 * @param {number[]} nums
 * @return {number}
 */


function merge(nums,low,mid,high){
    let temp=[];

    let left=low;
    let right=mid+1;

    while(left<=mid && right<=high){
        if(nums[left]<=nums[right]){
            temp.push(nums[left]);
            left++;
        }
        else{
            temp.push(nums[right]);
            right++;
        }
    }

    while(left<=mid){
        temp.push(nums[left]);
    }

    while(right<=high){
        temp.push(nums[right]);
    }

    for(let i=low;i<=high;i++){
        nums[i]=temp[low-i]
    }

}

function countPairs(nums,low,mid,high){

    let count=0;
    let right=mid+1;

   for(let i=low;i<=mid;i++){
       while(right<=high && nums[i]>2*nums[right]) {
           right++;
       }
       count+=right-(mid+1);
   }

   return count;

}


function mergeSort(nums,low,high){

let count=0
   if(low>=high){
       return count
   }

  let mid=Math.floor((low+high)/2);

 count+= mergeSort(nums,low,mid);
 count+= mergeSort(nums,mid+1,high);
 count+= countPairs(nums,low,mid,high)
         merge(nums,low,mid,high)
         return count;

}



var reversePairs = function(nums) {

  let count=mergeSort(nums,0,nums.length-1);

  return count;


};