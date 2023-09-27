//Print Name N times using Recursion


#include <iostream>
using namespace std;


void printName(int n){
  
  if(n==0){
    return;
  }
  
  std::cout << "Hemant" << std::endl;
  
  printName(n-1);
  
}

int main() 
{
    int n=5;
    printName(n);
    return 0;
}