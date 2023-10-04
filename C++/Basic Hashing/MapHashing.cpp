#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() 


{
  int n;
  std::cin >> n;
  int arr[n];
  
  for(int i=0;i<n;i++){
    cin>>arr[i];
  }
  
  // precompute
  
  map<int ,int>mapp;
  
  
  for(int i=0;i<n;i++){
    mapp[arr[i]]++;
  }
  
  int q;
  cin>>q;
  
  while(q--){
    int number;
    std::cin >> number;
    //fetch
    std::cout << mapp[number] << std::endl;
  }
  
   
    return 0;
}



// how we perform when we have string 


#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() 


{
  string s="abacdaeg";
  
  map<char,int>mapp;
  
  for(int i=0;i<s.size();i++){
    mapp[s[i]]++;
    //std::cout << s[i] << std::endl;
    
  }
  //  This below for loop use to iterate in the map;
  for(auto it:mapp){
    //   it.first=>key and it.second=>value in the c++;
    cout<<it.first<<"=>"<<it.second<<endl;
  }
  
  
   
    return 0;
}