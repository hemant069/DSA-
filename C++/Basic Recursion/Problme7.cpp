
#include <iostream>
using namespace std;


bool pallindrome(int i, string& s){
  if(i>=s.length()/2) return true;
  else if(s[i]!=s[s.length()-i-1]) return false;
  
  pallindrome(i+1,s);
}

int main() 
{
   string s="ama";
  int val= pallindrome(0,s);
if(val==1){
  std::cout <<"pallindrome" << std::endl;
}
else{
  cout<<"not pallindrome";
}
    return 0;
}