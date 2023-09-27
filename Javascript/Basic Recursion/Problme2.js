
function printNums(i,n){
    if(i>n){
      return 
    }
    console.log(i);
    printNums(i+1,n);
  }
  
  
  function main(){
    let n=10;
    printNums(1,n)
  }
  
  
  main()
  