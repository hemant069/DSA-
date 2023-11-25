
//



let arr=[1,1,2,2,2,3,3];


let k=1;

for(let i=1;i<arr.length;i++){
  if(arr[i]!==arr[k-1]){
    arr[k]=arr[i];
    k++;
    console.log(k)
  }
}
console.log(k)
