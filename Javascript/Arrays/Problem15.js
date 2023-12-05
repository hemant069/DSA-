
let arr=[2,6,5,8,11];


let target=14;
// 1 . Brute Force solution



for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]+arr[j]==target){
      console.log(i,j);
      break;
    }
  }
}



// 2 Better solution

let map=new Map()


for(let i=0;i<arr.length;i++){
  
  let sub=target-arr[i];
  
  if(map.has(sub)){
    let val=map.get(sub)
    console.log(i,val)
  }
  else{
    map.set(arr[i],i)
  }
}


// 3 Optimal solution but in case of YES and NO






arr.sort((a,b)=>a-b)





let i=0;
let j=arr.length-1;

while(i<j){
  
console.log(i,j);
  if(arr[i]+arr[j]==target){
 
    console.log(i,j);
    break;
  }
  else if(arr[i]+arr[j]<target){
    i++;
  }
  else{
    j--;
  }
}




