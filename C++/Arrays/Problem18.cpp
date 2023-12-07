

// 1. Brute Force Approch


#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() 
{
    int n=9;
    int arr[n]={-2,1,-3,4,-1,2,1,-5,4};
    int max=INT_MIN;
    for(int i=0;i<n;i++){
      int sum=0;
      for(int j=i;j<n;j++){
        sum+=arr[j];
        if(sum>max){
          max=sum;
        }
      }
    }
    std::cout << max << std::endl;
    return 0;
}


// 2  . Optimal Solution 


class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        
        
        int max=INT_MIN;
        int sum=0;
        for(int i=0;i<nums.size();i++){
          sum+=nums[i];
          if(sum>max){
            max=sum;
          }
          if(sum<0){
            sum=0;
          }
        }
        return max;
    }
};