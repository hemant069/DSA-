#include <iostream>
using namespace std;

void printFactorial(int fact,int n){
  if(n==0){
    std::cout << fact << std::endl;
    return  ;
  }
  fact*=n;
  printFactorial(fact,n-1);
}
int main() 
{
   int n=5;
   int fact=1;
   printFactorial(fact,n);
    return 0;
}