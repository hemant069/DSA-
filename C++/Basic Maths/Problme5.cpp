#include <iostream>
#include<cmath>
using namespace std;

int main() 
{
  int num=153;
  int nums=num;
  int n=nums;
   int count=0;
  while(nums>0){
    int res=nums%10;
    count++;
    nums=nums/10;
  }
   
  int arm=0;
  while(n>0){
    int res= n%10;
    
    arm=arm+pow(res,count);
    n=n/10;
    
  }
  
  if(arm==num){
    std::cout << "armstrong number" << std::endl;
  }
  else{
    std::cout << "not armstrong number" << std::endl;
  }

    return 0;
}