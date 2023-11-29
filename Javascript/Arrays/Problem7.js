
// Move zero to last




let arr=[1 ,0 ,2 ,3 ,0 ,4 ,0 ,1];

let j=-1;

for(let i=0;i<arr.length;i++){
  if(arr[i]==0){
    j=i;
    break;
  }
}


for(let i=j+1;i<arr.length;i++){
  if(arr[i]!==0){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    j++;
  }
}

console.log(arr)