

//Problem Statement: Given an integer N, write a program to count the number of digits in N.



#include <iostream>
using namespace std;

int main() 
{
    int n;
    cin>>n;
  
    int count=0;
    while(n!=0){
      
      n=n/10;
      count=count+1;
    }
    std::cout << count << std::endl;
   
    return 0;
}