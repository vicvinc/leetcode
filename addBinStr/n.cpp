#include <iostream>
#include <string>
#include <cmath>
#include <cstdlib>

using namespace std;

class Solution {
  public: 
	string addBinary( string a, string b) {
        	int alen = a.size(), blen = b.size();
		int carry = 0;
		string result;
		while ( alen > 0 || blen > 0 ) {
			int abit = alen <= 0? 0: a[alen-1] - '0';
			int bbit = blen <= 0? 0: b[blen-1] - '0';
			int cbit = carry;
			result.insert( result.begin(), '0' + (( abit + bbit + cbit ) & 1));
			carry = ( abit + bbit + cbit ) > 1 ? 1: 0;
			alen --; 
			blen --;
		}
		if( carry == 1 )
			result.insert( result.begin(), '1');
		return result;
    	}
};

int main( int argc, const char *argv[])
{
	string s1("0");
	string s2("0");
			cout << __LINE__ << "s1: " << s1 << endl;
			cout << __LINE__ << "s2: " << s2 << endl;
	Solution s;
	cout << "res: " << s.addBinary( s1, s2 ) << endl;
	return 0;
}

