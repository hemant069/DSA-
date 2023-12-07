// buy and sell the stocks max profit 


let arr=[7,1,5,3,6,4];

// ans =5;

let maxPro=0;
let min=Infinity;

for(let i=0;i<arr.length;i++){
  min=Math.min(min,arr[i]);
  let val=arr[i]-min;
  maxPro=Math.max(maxPro,val);
}


console.log(maxPro)
