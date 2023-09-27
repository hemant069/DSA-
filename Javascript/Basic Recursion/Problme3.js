
// print  N to 1 

function printNums(n){
    if(n==0){
      return 
    }
    console.log(n);
    printNums(n-1);
  }
  
  
  function main(){
    let n=5;
    printNums(n)
  }
  
  
  main()
  