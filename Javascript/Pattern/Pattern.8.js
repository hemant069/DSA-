


for(let i=0;i<5;i++){
    let temp=" ";
    
    for(let j=0;j<i;j++){
      temp+=" "
    }
    for(let k=0;k<2*5-(2*i+1);k++){
      temp+="*"
    }
    for(let j=0;j<i;j++){
      temp+=" "
    }
    console.log(temp)
  }