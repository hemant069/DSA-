 

 // 1. Brute Force solution

 for(let i=0;i<arr.length;i++){
    let count=0;
    let temp=arr[i];
    for(let j=i;j<arr.length;j++){
      if(temp==arr[j]){
        count++;
      }
    }
    if(count>=arr.length/2){
      console.log(temp);
      break;
    }
  }

// 2 . Better solution 

let arr=[4,4,2,4,3,4,4,3,2,4];

let map=new Map(); // map(key,val)


for(let i=0;i<arr.length;i++){
  if(map.has(arr[i])){
    let val=map.get(arr[i]);
    map.set(arr[i],val+1);
  }
  else{
    map.set(arr[i],1);
  }
}


for(let [key,val] of map){
  if(val>=arr.length/2){
    console.log(key);
    break;
  }
}




// 3 Optimal Solution 









let ctn=0

let el;

for(let i=0;i<arr.length;i++){
  if(ctn==0){
    ctn=1;
    el=arr[i];
  }
  else if(arr[i]==el){
    ctn++;
  }
  else{
    ctn--;
  }
}

let ctn1=0;

for(let i=0;i<arr.length;i++){
  if(arr[i]==el){
  ctn1++;
  }
}



if(ctn1>=(arr.length/2)){
  console.log(el)
}