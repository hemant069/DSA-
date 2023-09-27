

#include <iostream>
using namespace std;


void printNums(int i,int n){
  if(i>n){
    return;
  }
  std::cout << n << std::endl;
  
  printNums(i,n-i);
}

int main() 
{
    int n=10;
    printNums(1,n);
    return 0;
}