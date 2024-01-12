/// Lower Bound


// Condition arr[mid]>=x

let arr=[3,5,8,15,19];

let x=9;

let ans=arr.length;

let low=0;
let high=arr.length-1;


while(low<high){
  let mid=Math.floor((low+high)/2);
  
  
  if(arr[mid]>=x){
  ans=mid;
  high=mid-1
   
  }
  
  else{
     low=mid+1;
  }
 
   
  

  
}

console.log(ans)