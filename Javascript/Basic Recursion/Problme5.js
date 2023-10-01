


function printFactorial(fact,n){
    if(n==0){
      console.log(fact);
      return 
    }
    fact*=n;
    
    printFactorial(fact,n-1);
  }
  
  
  function main(){
    let n=5;
    let fact=1;
    printFactorial(fact,n)
  }
  
  
  main()
  