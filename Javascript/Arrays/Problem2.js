// Finding the second largest and second smallest elemant in the array;

let arr=[1,2,4,7,7,5];


let max=-Infinity;
let min=Infinity;


for(let i=0;i<arr.length;i++){
  if(max<arr[i]){
    max=arr[i];
  }
  if(min>arr[i]){
    min=arr[i];
  }
}

let secMax=-Infinity;
let secMin=Infinity;

for(let i=0;i<arr.length;i++){
  if(secMax<arr[i] && arr[i]!==max){
    secMax=arr[i];
  }
  if(secMin>arr[i] && arr[i]!==min){
    secMin=arr[i];
  }
}

console.log(secMax,secMin)

