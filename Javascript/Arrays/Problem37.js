

let arr=[1,2,3,4,5];
let sum=0;


for(let i=0;i<arr.length;i++){
  let count=0;
  for(let j=1;j<arr.length;j++){
    if(i<j && arr[i]>arr[j]){
      //console.log(arr[i]<arr[j])
      count++;
    }
  }
  sum+=count;
}

console.log(sum)