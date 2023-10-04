
//Find the highest/lowest frequency element


let arr=[10,5,10,15,10,5];


let map=new Map();

for(let i=0;i<arr.length;i++){

  if(map.has(arr[i])){
    let getval=map.get(arr[i]);
    map.set(arr[i],getval+1);
  }
  else{
    map.set(arr[i],1);
  }
}

let max=-Infinity;
let min=Infinity;
let maxval;
let minval;
for(let [key,value] of map){
  
  if(max<value){
    max=value;
    maxval=key;
  }
  
   if(min>value){
    min=value;
    minval=key;
  }
 
 
}
console.log(max,maxval,min,minval)