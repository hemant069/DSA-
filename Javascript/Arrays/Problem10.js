// hash Array solution 




let arr=[1,2,3,4,6];
let n=5;


let hash=new Array(n+1).fill(0);


for(let i=0;i<n-1;i++){
hash[arr[i]]++;
}


for(let i=1;i<hash.length;i++){
  if(hash[i]==0){
    console.log(i);
    break;
  }
}

// Better Solution


let sum1=nums.length*(nums.length+1)/2


 

let sum2=0;
for(let i=0;i<nums.length;i++){
    sum2+=nums[i];
}

console.log(sum1-sum2);