// Union Of Array

let arr1=[1,2,3,4,5,6,7,8,9,10];

let arr2=[1,2,3,4,5,6,7,8,9,10,11,12];



let i=0;
let j=0;

let unionArr=[]

while(i<arr1.length && j<arr2.length){
  if(arr1[i]<=arr2[j]){
    if(unionArr.length==0 || unionArr[unionArr.length-1]!==arr1[i]){
      unionArr.push(arr1[i]);
    }
    i++;
  }
  else{
    if(unionArr[unionArr.length-1]!==arr2[j]){
      unionArr.push(arr2[j])
    }
    j++;
  }
}

while(i<arr1.length){
   
    if(unionArr.length==0 || unionArr[unionArr.length-1]!==arr1[i]){
      unionArr.push(arr1[i]);
    }
    i++;
  
}

while(j<arr2.length){
   if(unionArr.length==0 || unionArr[unionArr.length-1]!==arr2[j]){
      unionArr.push(arr2[j])
    }
    j++;
}

console.log(unionArr)
