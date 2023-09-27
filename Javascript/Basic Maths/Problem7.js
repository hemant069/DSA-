


let n=12;

function isPrime(){
  for(let i=2;i<n;i++){
    if(n%i==0){
      return false;
    }
    
  }
  return true;
}



let ans=isPrime();

if(n!==1 && ans===true){
  console.log("Prime")
}
else{
  console.log("Not Prime")
}