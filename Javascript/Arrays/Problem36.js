

let arr=[3,1,2,5,4,6,7,5];

let A // A for the repeating element

let B // B for the missing element



arr.sort((a,b)=>a-b);

let flag=false;

for(let i=0;i<arr.length;i++){
  //console.log(arr[i+1]-arr[i]>1)
  if(arr[i+1]-arr[i]>1){
    flag=true;
    A=i+1;
  }
  if(arr[i+1]==arr[i]){
    B=arr[i];
  }
  
  
}

if(flag==false){
  A=arr.length
}

console.log(B,A)

