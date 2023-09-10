

let n=4;

for(let i=1;i<=n;i++){
  //Number
  let temp="";
  for(let j=1;j<=i;j++){
    temp+=j;
  }
  //space
  for(let j=1;j<2*(n-i);j++){
    temp+=" "
  }
  //Number
  for(let j=i;j>=1;j--){
    temp+=j;
  }
  console.log(temp)
}