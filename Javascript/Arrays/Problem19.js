


 // In this question we have to find the maximum sum with the maximum subarray;

let nums=[-2,1,-3,4,-1,2,1,-5,4];

let max=-Infinity;
let sum=0;
let ansStart=-1; // to track where we get first index of the subarray
let ansEnd=-1   // where we can find the last index of the subarray
let start;
for(let i=0;i<nums.length;i++){
  if(sum==0){
   start=i;
  }
  sum+=nums[i];
  
  if(sum>max){
    
    max=sum;
    ansStart=start;
    ansEnd=i;
  }
  else if(sum<0){
    sum=0;
  }
  
  
}

console.log(max,ansStart,ansEnd)