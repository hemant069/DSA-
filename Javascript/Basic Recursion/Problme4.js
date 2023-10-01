


function printSum(sum,n){
    if(n==0){
      console.log(sum);
      return 
    }
    sum+=n;
    
    printSum(sum,n-1);
  }
  
  
  function main(){
    let n=5;
    let sum=0
    printSum(sum,n)
  }
  
  
  main()
  