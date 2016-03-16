#include <iostream>
#include <string>
#include <cmath>
#include <cstdlib>

using namespace std;

class Solution {
  public: 
	string addBinary( string a, string b) {
        	int alen = a.size(), blen = b.size();
		int hlen;
		int carry = 0;
		string sum;
			cout << __LINE__ << "alen " << alen << " blen " << blen << endl;
		if( alen >= blen ) {
			sum.resize( alen + 1 );
			hlen = alen - blen;
			for( int i = blen-1; i >= 0; i-- ) {
				int abit = a[hlen+i] - '0';
				int bbit = b[i] - '0';
				int cbit = abit + bbit + carry;
				char ch = cbit%2 + '0';
				sum[hlen+i+1] = ch;
				if( cbit > 1 )
					carry = 1;
				else 
					carry = 0;
			}
			for( int j = hlen-1; j >= 0; j-- ) {
				int abit = a[j] - '0';
				int bbit = abit + carry;
				char cbit = bbit%2 + '0';
				if( bbit > 1 )
					carry = 1;
				else
					carry = 0;
				sum[j+1] = cbit;
			}
			if( carry == 1 ) {
				sum[0] = '1';
			}
			else {
				sum.erase( sum.begin() );
			}
			return sum;
		}
		else {
			cout << __LINE__ << endl;
			return addBinary( b, a );
		}
    	}
};

int main( int argc, const char *argv[])
{
	string s1("100");
	string s2("110010");
			cout << __LINE__ << "s1: " << s1 << endl;
			cout << __LINE__ << "s2: " << s2 << endl;
	Solution s;
	cout << "res: " << s.addBinary( s2, s1 ) << endl;
	return 0;
}

