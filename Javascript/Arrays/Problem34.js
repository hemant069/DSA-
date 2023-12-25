
// Brute Force Approch

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let n=intervals.length;
    intervals.sort((a,b)=>a[0]-b[0]);
    let ans=[];

    for(let i=0;i<n;i++){
        let start=intervals[i][0];
        let end=intervals[i][1];

        if(!ans.length==0 && end<=ans[ans.length-1][1]){
            continue;
        }
        else{

            for(let j=i+1;j<intervals.length;j++){

                if(end>=intervals[j][0]){
                    end=Math.max(end,intervals[j][1]);
                }
                else{
                    break;
                }
            }
        }
        ans.push([start,end])
    }
    return ans
};

// Optimal 

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let n=intervals.length;
    intervals.sort((a,b)=>a[0]-b[0]);
    let ans=[];

   for(let i=0;i<n;i++){
       if(ans.length==0 || ans[ans.length-1][1]<intervals[i][0]){
           ans.push(intervals[i]);
       }
       else{
           ans[ans.length-1][1]=Math.max(ans[ans.length-1][1],intervals[i][1]);
       }
   }
   return ans;
};