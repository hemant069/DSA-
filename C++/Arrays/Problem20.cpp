

// Buy and sell Stock


  #include <iostream>
  #include <bits/stdc++.h>
  using namespace std;
  
  int main() 
  {
      int n=6;
      int arr[n]={7,1,5,3,6,4};
       
      int maxProfit=0;
      int minPrice=INT_MAX;
      for(int i=0;i<n;i++){
        minPrice=min(minPrice,arr[i]);
        maxProfit=max(maxProfit,arr[i]-minPrice);
      }
      std::cout << maxProfit << std::endl;
      return 0;
  }