
// 1 Better Solution 



#include <iostream>
using namespace std;

int main() 
{
    int n=6;
    int arr[n]={2,0,2,1,1,0};
    
    int zeroctn=0;
    int onectn=0;
    int twoctn=0;
    for(int i=0;i<n;i++){
      if(arr[i]==0){
        zeroctn++;
      }
      else if(arr[i]==1){
        onectn++;
      }
      else{
        twoctn++;
      }
    }
    
    for(int i=0;i<zeroctn;i++){
      arr[i]=0;
      
    }
    for(int i=zeroctn;i<zeroctn+onectn;i++){
      arr[i]=1;
    }
    for(int i=onectn+twoctn;i<n;i++){
      arr[i]=2;
    }
    for(int i=0;i<n;i++){
      std::cout << arr[i] << std::endl;
    }
    
    return 0;
}



// 2 Optimal Solution which i write on the leetcode



class Solution {
public:
    void sortColors(vector<int>& nums) {
        int low=0;
        int mid=0;
        int high=nums.size()-1;

        while(mid<=high){
          if(nums[mid]==0){
            swap(nums[low],nums[mid]);
            low++;
            mid++;
          }
          else if(nums[mid]==1){
            mid++;
          }
          else{
            swap(nums[mid],nums[high]);
            high--;
          }
        }
       
    }
};