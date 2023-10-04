

//Count frequency of each element in the array

let arr=[10,5,10,15,10,5];


let map=new Map();

for(let i=0;i<arr.length;i++){
 // console.log(arr[i])
  if(map.has(arr[i])){
    let getval=map.get(arr[i]);
    map.set(arr[i],getval+1);
  }
  else{
    map.set(arr[i],1);
  }
}

for(let [key,value] of map){
  console.log(key,value)
}