
// Print 1 to N using recursion


#include <iostream>
using namespace std;


void printNums(int i,int n){
  if(i>n){
    return;
  }
  std::cout << i << std::endl;
  
  printNums(i+1,n);
}

int main() 
{
    int n=10;
    printNums(1,n);
    return 0;
}