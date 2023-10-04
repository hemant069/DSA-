

// what happen in the javascript map is when we want set key value pair in the map 
// map('key',value);

let arr=[1,1,2,3,2,5,6];

let map=new Map();

let obj={};
for(let i=0;i<arr.length;i++){
 if(map.has(arr[i])){
   
  let getval=map.get(arr[i])
  map.set(arr[i],getval+1)
  
 }
 else{
   map.set(arr[i],1)
 }
}

console.log(map)



// When we have string 


let str="abacedg";

let mapstr=new Map();

for(let i=0;i<str.length;i++){
 if(mapstr.has(str[i])){
   
  let getval=mapstr.get(str[i])
  mapstr.set(str[i],getval+1)
  
 }
 else{
   mapstr.set(str[i],1)
 }
}

console.log(mapstr)