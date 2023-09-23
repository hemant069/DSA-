

let nums=121;
let n=nums
let val=""
while(n>0){
  let res=n%10;
  val+=res;
  n=Math.floor(n/10);
}

if(nums==val){
  console.log("Pallindrome")
}
else{
  console.log("not Pallindrome")
}


