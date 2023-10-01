#include <iostream>
using namespace std;


int printFibo(int n){
  
  if(n<=1){
    return n ;
    
  }
 int last=printFibo(n-1);
 int secondlast=printFibo(n-2);
 return last+secondlast;
}

int main() 
{
  int n=5;
  
std::cout <<   printFibo(n) << std::endl;
  
  
   
    return 0;
}