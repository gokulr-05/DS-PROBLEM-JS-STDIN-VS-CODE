#include <iostream>
#include <map>
using namespace std;
int main()
{
int testcase,count=0;
cin >> testcase;



for(int t = 0; t < testcase; t++) 
{

    int n;
    cin >> n;

    int a[n];
    for(int i = 0; i < n; i++) 
    {
    cin >> a[i];
    }

    for (int j = n - 2; j >= 0; --j) {
      while (a[j] >= a[j + 1]) {
        --a[j];
        ++count;
      }
    }


    // int ans = 1;
    // for(int i = 0; i < n; i++) {
    // map < int, int > mp; // map to maintain ocurrences
    // for(int j = i; j < n; j++) {
    // mp[a[j]] = mp[a[j]] + 1;
    // bool ok = true;
    // int count = mp.begin() -> second;
    // for(map < int, int > :: iterator it = mp.begin(); it

    // != mp.end(); ++it) {

    // if(count != it -> second) {
    // ok = false;
    // break;
    // }
    // }
    // if (ok) {
    // ans = max(ans, j - i + 1);
    // }
    // }
    // }


}


cout << ans;
}