

let start=1;
for(let i=0;i<5;i++){
  let temp="";
  if(i%2==0)start=1;
  else start=0
  for(let j=0;j<=i;j++){
    temp+=start;
    start=1-start
  }
  console.log(temp)
}