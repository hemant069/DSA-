
// Brute Force Approch


let arr=[2,3,5,1,9];

let leng=0;
let k=10;

for (let i = 0; i < arr.length; i++) {
    
    for(let j=i;j<arr.length;j++){
      
      let sum=0;
      
      for(let k=i;k<=j;k++){

        sum+=arr[k];
  
        
      }

      if(sum==k){
          leng=Math.max(leng,j-i+1);

        }
    }
}

console.log(leng)