
let hashmap=new Map();

let PrefixSum=0;

let longlen=0;

for(let i=0;i<arr.length;i++){
  
  PrefixSum+=arr[i];
  
  if(PrefixSum==k){
    longlen=Math.max(longlen,i+1);
  }
  
  let rem=PrefixSum-k;
  
  if(hashmap.has(rem)){
    
    let  len=i-hashmap.get(rem);
    
    longlen=Math.max(longlen,len);
    
  }
  if(!hashmap.has(PrefixSum)){
    hashmap.set(PrefixSum,i);
  }
  
}

console.log(longlen)