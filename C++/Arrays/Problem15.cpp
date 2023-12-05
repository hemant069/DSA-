

// 1. Brute Force

#include <iostream>
using namespace std;

int main() 
{
   int n=6;
   int arr[n]={2,6,5,8,11};
   int target=14;
   
   for(int i=0;i<n;i++){
     for(int j=i+1;j<n;j++){
       
       if(arr[i]+arr[j]==target){
         
         std::cout << i<<" "<< j << std::endl;
         
         break;
         
       }
     }
   }
   
   return 0;
}



// 2. Better Solution

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() 
{
   int n=6;
   int arr[n]={2,6,5,8,11};
   int target=14;
   
   unordered_map<int, int> mpp;
    for (int i = 0; i < n; i++) {
        int num = arr[i];
        int moreNeeded = target - num;
        if (mpp.find(moreNeeded) != mpp.end()) {
            return {mpp[moreNeeded], i};
        }
        mpp[num] = i;
    }
    
    
  
   
   return 0;
}

