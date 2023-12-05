#include <iostream>
#include <bits/stdc++.h>
using namespace std;


void SubArr(int n,int arr[],int k){
  
  map<int,int>preSumMap;
  
  int sum=0;
  
  int longlen=0;
  
  for(int i=0;i<n;i++){
    
    sum+=arr[i];
    
    if(sum==k){
      
      longlen=max(longlen,i+1);
    }
    
    int rem=sum-k;
    
    if(preSumMap.find(rem)!=preSumMap.end()){
      int len=i-preSumMap[rem];
      longlen=max(longlen,len);
    }
    
    if(preSumMap.find(sum)==preSumMap.end()){
      
      preSumMap[sum]=i;
    }
    
  }
  std::cout << longlen << std::endl;
}

int main() 
{
    
    int n=6;
    
    int arr[n]={1,2,3,4,5,6};
    
    int k=6;
    
    
    SubArr(n,arr,k);
    
    
    return 0;
}