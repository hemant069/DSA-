

 // 1 . Brute Force solution 



 #include <iostream>
using namespace std;

int main() 
{
    int n=6;
    int arr[n]={3,2,3};
    
    for(int i=0;i<n;i++){
      int temp=arr[i];
      int ctn=0;
      for(int j=i;j<n;j++){
        if(temp==arr[i]){
          ctn++;
        }
      }
      if(ctn>=n/2){
        std::cout << temp << std::endl;
        break;
      }
    }
    
    
    return 0;
}

// 2 Better solution


#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() 
{
    int n=6;
    int arr[n]={3,2,3};
    
    map<int,int>hashmap;
    
    for(int i=0;i<n;i++){
     hashmap[arr[i]]++;
    }
    
    for(auto it :hashmap){
     if(it.first>=n/2){
       std::cout << it.second << std::endl;
     }
    }
    return 0;
}


 // 3 Better solution 


 #include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() 
{
    int n=3;
    int arr[n]={3,2,3};
    int ctn=0;
    int el;
    for(int i=0;i<n;i++){
      if(ctn==0){
        ctn=1;
        el=arr[i];
      }
      else if(el==arr[i]){
        ctn++;
      }
      else{
        ctn--;
      }
    }
    
    int ctn1=0;
    
    for(int i=0;i<n;i++){
      if(el==arr[i]){
        ctn1++;
      }
    }
    
    if(ctn1>=n/2){
      std::cout << el << std::endl;
    }
    return 0;
}