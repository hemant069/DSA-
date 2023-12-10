let arr=[3,2,1];

var nextPermutation = function(arr) {
    
    let id=-1;
    for(let i=arr.length-2;i>=0;i--){
      if(arr[i]<arr[i+1]){
        id=i;
        break;
      }
    }
    
    if(id==-1){
    return  arr.reverse();
    }
    
    for(let i=arr.length-1;i>id;i--){
      if(arr[i]>arr[id]){
        let temp=arr[i];
        arr[i]=arr[id];
        arr[id]=temp;
        break;
      }
    }
    
    let low=id+1;
    let high=arr.length-1;
    while(low<high){
      let temp=arr[low];
      arr[low]=arr[high];
      arr[high]=temp;
      low++;
      high--;
    }
    
    return arr;
    };