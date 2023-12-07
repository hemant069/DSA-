
 // Brute Force Approch



let nums=[-2,1,-3,4,-1,2,1,-5,4];

let max=0;
for(let i=0;i<nums.length;i++){
  let sum=0;
  for(let j=i;j<nums.length;j++){
    sum+=nums[j];
   
   if(sum>max){
     max=sum;
   }

  }
  
}

console.log(max)


// Kadane Algorithm


let max=-Infinity;
let sum=0;
for(let i=0;i<nums.length;i++){
    sum+=nums[i];

    if(sum>max){
        max=sum;
    }
    else if(sum<0){
        sum=0;
    }
}

console.log(sum);