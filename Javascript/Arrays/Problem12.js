
//Find the number that appears once, and the other numbers twice

// 1. Brute Force Approch of all condition

for(let i=0;i<nums.length;i++){
    let count=0;
   for(let j=0;j<nums.length;j++){
     if(nums[i]==nums[j]){
       count++;
     }
   }
   if(count==1){
     return nums[i]
   }
 }

// 2. Better approch but all element should  be in positive using hash Array



let arr=[4, 1, 2, 1, 2,4,0];


let hash=new Array(arr.length+1).fill(0);


for(let i=0;i<arr.length;i++){
  hash[arr[i]]++;
}



for(let i=0;i<hash.length;i++){
  if(hash[arr[i]]==1){
    console.log(arr[i]);
    break;
  }
}


// 3. Better solution apply in the array positive and negative both

let map=new Map();

for(let i=0;i<arr.length;i++){
  
  if(map.has(arr[i])){
    let val=map.get(arr[i])
    map.set(arr[i],val+1)
  }
  else{
    map.set(arr[i],1)
  }
}

for(let [key,value] of map){
  if(value==1){
    return key;
  }
}

// 4. Optimal Solution 

let xoarr=0;

for(let i=0;i<arr.length;i++){
  xoarr=xoarr^arr[i]
}