//Find the highest/lowest frequency element

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() 
{
   int arr[]={10,5,10,15,10,5};
   
   int length=sizeof(arr)/sizeof(arr[0]);
   
   unordered_map<int,int>mapp;
   for(int i=0;i<length;i++){
     mapp[arr[i]]++;
   }
   int max=0;
   int maxval;
   int min=length;
   int minval;
   
   for(auto it : mapp){
     if(max<it.second){
       max=it.second;
       maxval=it.first;
     }
      if(min>it.second){
       min=it.second;
       minval=it.first;
     }
     
   }
   std::cout << maxval<<" "<<minval << std::endl;
    return 0;
}