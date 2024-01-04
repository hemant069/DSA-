/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(arr) {


    if(arr.length==1){
        return arr[0];
    }
    
    let preffix=1;
    let suffix=1;
    
    let max=-Infinity
    
    for(let i=0;i<arr.length;i++){
      
      if(preffix==0){
        preffix=1;
      }
      if(suffix==0){
        suffix=1;
      }
      
      preffix=preffix*arr[i];
      
      suffix=suffix*arr[arr.length-i-1];
      
      max=Math.max(max,Math.max(preffix,suffix));
      
      
      
    }
    
    return max
    
    };