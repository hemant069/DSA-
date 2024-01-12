

let arr=[3,5,8,9,15,19];

let x=9;


// Upper bound 

// Condition arr[mid]>x 

let low=0;
let high=arr.length-1;
let ans=arr.length;

while(low<high){
  let mid=Math.floor((low+high)/2);
  
  if(arr[mid]>x){
    ans=mid;
    high=mid-1;
  }
  else{
    low=mid+1;
  }
}

console.log(ans)