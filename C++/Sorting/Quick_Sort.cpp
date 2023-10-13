#include <iostream>
#include <algorithm>
#include <bits/stdc++.h>
using namespace std;


int partition(vector<int>&arr, int low ,int high){
  int pivot=arr[low];
  int i=low;
  int j=high;
  
  while(i<j){
    while(arr[i]<=pivot && i<=high-1){
      i++;
    }
    while(arr[j]>pivot && j>=low+1){
      j--;
    }
    if(i<j){
      swap(arr[i],arr[j]);
    }
  }
  swap(arr[low],arr[j]);
  return j;
}

void  qs(vector<int>&arr ,int low, int high){
  if(low<high){
    int pIndex=partition(arr,low ,high);
    qs(arr,low,pIndex-1);
    qs(arr,pIndex+1,high);
  }
}

int main() 
{
   int n=7;
   vector<int>arr{1,5,6,7,2,3,4};
   qs(arr,0,n-1);
   for(int i=0;i<n;i++){
     std::cout << arr[i] << std::endl;
   }
    return 0;
}