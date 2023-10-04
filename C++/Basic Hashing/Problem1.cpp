
// Count frequency of each element in the array

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
   
   for(auto it : mapp){
     std::cout << it.first<<" "<<it.second << std::endl;
   }
    return 0;
}