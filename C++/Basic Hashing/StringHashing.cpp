#include <iostream>
using namespace std;

int main() 
{
 
   string str;
   std::cin >> str;
   int q;
   cin>>q;
   int hash[str.size()+1]={0};
   
   for(int i=0;i<str.size();i++){
     hash[str[i]-'a']+=1;
   }
   
   while(q--){
     char c;
     cin>>c;
     std::cout << hash[c-'a'] << std::endl;
   }
   
    return 0;
}