
#include <iostream>
using namespace std;

int main() 
{
    int n;
    std::cin >> n;
    int arr[n];
    
    for(int i=0;i<n;i++){
      cin>>arr[i];
    }
    int q;
    cin>>q;
    
    int hash[n+1]={0};
    for(int i=0;i<n;i++){
      hash[arr[i]]+=1;
    }
    
    while(q--){
      int nums;
      cin>>nums;
      std::cout << hash[nums] << std::endl;
    }
    return 0;
}