// Find Maximum consicative 1 in the array





let arr=[1, 0, 1, 1, 0, 1];

let count=0;
let maxCount=0
for(let i=0;i<arr.length;i++){
  
  if(arr[i]==1){
    count++;
  }
  maxCount=Math.max(maxCount,count)
  if(arr[i]!==1){
    count=0;
  }
  
}

console.log(maxCount)
