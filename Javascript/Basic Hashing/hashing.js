


//basic hashing in javascript;

// what is hashing it's just pre compute and fetching method




function main(){
  
    let n=7;
    let arr=[1,2,1,3,2,5,6];
    let q=5;
    let nums=[1,2,3,4,5];
    
    let hash=[0,0,0,0,0,0,0];
    
    for(let i=0;i<n;i++){
      hash[arr[i]]+=1;
    }
  
  while(q--){
    
    console.log(hash[nums[q]])
    console.log(nums[q],{q})
  }
    
    
  }
  
  main()