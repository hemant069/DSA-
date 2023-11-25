#include <iostream>
#include<bits/stdc++.h>
using namespace std;


void Find(int n, int arr[]){
  
  int small=INT_MAX;
  int large=INT_MIN;
  
  for(int i=0;i<n;i++){
    
  small=min(small,arr[i]);
  
  large=max(large,arr[i]);
  
  }
  
int secSmall=INT_MAX;
int secLarge=INT_MIN;

for(int i=0;i<n;i++){
  if(secSmall>arr[i] && arr[i]!=small ){
    secSmall=arr[i];
  }
  if(secLarge<arr[i] && arr[i]!=large){
    secLarge=arr[i];
  }
}

std::cout << secSmall << std::endl;
std::cout << secLarge << std::endl;
}

int main() 
{

    int arr[]={1,2,4,7,7,5};
    
    int n=sizeof(arr)/sizeof(arr[0]);
    
    Find(n,arr);
    
    return 0;
}