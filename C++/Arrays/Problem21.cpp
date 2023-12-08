// Brute Force
#include <iostream>
#include<bits/stdc++.h>
using namespace std;

int main() 
{
    int n=4;
    int arr[n]={1,2,-4,-5};
   
    vector <int>pos;
    vector<int>neg;
    vector<int>newarr;
    
    for(int i=0;i<n;i++){
      if(arr[i]>0){
        pos.push_back(arr[i]);
      }
      else{
        neg.push_back(arr[i]);
      }
    }
    
    for (int i = 0; i < pos.size(); i++) {
      newarr.push_back(pos[i]);
      newarr.push_back(neg[i]);
    }
    for (int i = 0; i < newarr.size(); i++) {
     std::cout << newarr[i] << std::endl;
    }
    return 0;
}


// Optimal Approch


#include <iostream>
#include<bits/stdc++.h>
using namespace std;

int main() 
{
    int n=4;
    int arr[n]={1,2,-4,-5};
   
    int posIndex=0;
    int negIndex=1;
    vector<int>ans;
    
    for(int i=0;i<n;i++){
      if(arr[i]<0){
          ans[negIndex] = arr[i];
          negIndex+=2;
      }
      
      // Fill positive elements in even indices and inc by 2.
      else{
          ans[posIndex] = arr[i];
          posIndex+=2;
      }
    }
    
   
    for (int i = 0; i < ans.size(); i++) {
     std::cout << ans[i] << std::endl;
    }
    return 0;
}