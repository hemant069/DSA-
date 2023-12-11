

// 1 Brute Force




let arr=[10, 22, 12, 3, 0, 6];

let ans=[];

for(let i=0;i<arr.length;i++){
  let count=0;
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]>arr[j]){
      count=1;
    }
    else{
      count=0;
      break;
    }
  }
  if(count==1){
    ans.push(arr[i]);
  }
  
}




console.log(ans)


// Optimal Approch

let arr=[10, 22, 12, 3, 0, 6];

let ans=[];


let max=arr[arr.length-1];

ans.push(arr[arr.length-1]);

for(let i=arr.length-2;i>=0;i--){
  if(max<arr[i]){
    ans.push(arr[i]);
    max=arr[i]
  }
}


console.log(ans)