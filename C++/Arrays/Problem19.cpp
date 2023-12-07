

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() 
{
    int n=9;
    int nums[n]={-2,1,-3,4,-1,2,1,-5,4};
      int max=INT_MIN;
        int sum=0;
        int start;
        int ansStart=-1;
        int ansEnd=-1;
        for(int i=0;i<n;i++){
          if(sum==0){
            start=i;
          }
          sum+=nums[i];
          if(sum>max){
            max=sum;
            ansStart=start;
            ansEnd=i;
          }
          if(sum<0){
            sum=0;
          }
        }
       
    std::cout << max<<ansStart<<ansEnd << std::endl;
    return 0;
}