

// 1 Better Approch



let arr=[2,0,2,1,1,0];


let zeroCount=0;
let oneCount=0;
let twoCount=0;


for(let i=0;i<arr.length;i++){
  if(arr[i]==0){
    zeroCount++;
  }
  else if(arr[i]==1){
    oneCount++;
  }
  else{
    twoCount++;
  }
}

console.log(zeroCount,oneCount,twoCount)

for(let i=0;i<zeroCount;i++){
arr[i]=0
}

for(let i=zeroCount;i<oneCount+twoCount;i++){
arr[i]=1
}

let two=(oneCount+twoCount)/2+1
console.log(two)

for(let i=oneCount+twoCount;i<arr.length;i++){
  arr[i]=2
}


console.log(arr)


// 2 . Optimal Solution







let low=0;
let mid=0;
let high=arr.length-1;


while(mid<=high){
  
  if(arr[mid]==0){
    let temp=arr[low];
    arr[low]=arr[mid];
    arr[mid]=temp
    low++;
    mid++;
  }
  else if(arr[mid]==1){
   mid++;
  }
  else{
    
    let temp2=arr[mid];
    arr[mid]=arr[high];
    arr[high]=temp2
    high--;
  }
}

console.log(arr)