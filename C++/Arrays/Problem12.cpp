
 

 // 1 Brute Force solution


 #include <iostream>
using namespace std;

int main() 
{
    
    int n=6;
    int arr[n]={1, 0, 1, 1, 1,1};
   
   
   for(int i=0;i<n;i++){
      int count=0;
      for(int j=0;j<n;j++){
        if(arr[i]==arr[j]){
          count++;
        }
      }
      if(count==1){
        std::cout << arr[i] << std::endl;
        break;
      }
   }
    return 0;
}


// 2 Better solution 


#include <bits/stdc++.h>
using namespace std;

int getSingleElement(vector<int> &arr) {

    //size of the array:
    int n = arr.size();

    // Declare the hashmap.
    // And hash the given array:
    map<int, int> mpp;
    for (int i = 0; i < n; i++) {
        mpp[arr[i]]++;
    }

    //Find the single element and return the answer:
    for (auto it : mpp) {
        if (it.second == 1)
            return it.first;
    }

    //This line will never execute
    //if the array contains a single element.
    return -1;
}

int main()
{
    vector<int> arr = {4, 1, 2, 1, 2};
    int ans = getSingleElement(arr);
    cout << "The single element is: " << ans << endl;
    return 0;
}


// 3. Optimal Solution 


#include <iostream>
using namespace std;

int main() 
{
    
    int n=5;
    int arr[n]={1, 0, 1, 1, 1};
   
    int xoarr=0;
    for(int i=0;i<n;i++){
      xoarr=xoarr^arr[i];
    }
    std::cout << xoarr << std::endl;
   
    return 0;
}