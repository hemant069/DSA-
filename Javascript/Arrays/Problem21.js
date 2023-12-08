    // Brute Force 

    let pos=[];
    let nag=[];
    let newarr=[];

    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            pos.push(nums[i]);
        }
        else{
            nag.push(nums[i]);
        }
    }
    
    for(let i=0;i<pos.length;i++){
        newarr.push(pos[i]);
        newarr.push(nag[i]);
    }

   return newarr;


   // Optimal Approch


let postiveInd=0;
let negativeInd=1;


for(let i=0;i<arr.length;i++){
 if(arr[i]>0){
   newarr[postiveInd]=arr[i];
   postiveInd+=2;
 }
 else{
   newarr[negativeInd]=arr[i];
   negativeInd+=2;
 }
}

   return newarr;