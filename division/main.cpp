#include <iostream>
#include <cstdlib>
#include <limits.h>

using namespace std;

class Solution2 {
public:
  int divide( int dividend, int divisor ) {
	long long q = 0;
	int sign = 1;
	long long dvd = dividend;
	long long dvs = divisor;

	cout << __LINE__ << ": dvd : " << dvd << " dvs : " << dvs << endl;	
	if( dvd < 0 ) {
		sign = -sign;
		dvd = -dvd;
	}
	if( dvs < 0 ) {
		sign = -sign;
		dvs = -dvs;
	}
#if 0
	if ( dvd < dvs ) {
		q = divide( dvs, dvd);
	}
#endif
	cout << __LINE__ << ": dvd : " << dvd << " dvs : " << dvs << endl;	
	long long count = 1;
	long long  tmpdvs = dvs;
	while ( tmpdvs <= dvd ) {
		count <<= 1;
		tmpdvs <<= 1;
	cout << __LINE__ << ": count : " << count << " tmpdvs : " << tmpdvs << endl;
	}
	while ( tmpdvs >= dvs ) {
		while ( tmpdvs <= dvd ) {
			dvd -= tmpdvs;
			q += count;	
		}
		tmpdvs >>= 1;
		count >>= 1;
	cout << __LINE__ <<  ": count : " << count << " tmpdvs : " << tmpdvs << " q : " << q << endl;
	}
	if ( sign < 0 ) q = -q;
	if ( q > INT_MAX || q < INT_MIN ) {
                q = INT_MAX;
        }    
	return q;

  }
};

int main( int argc, const char *argv[])
{	
	//test
	int dividend = -2147483648, divisor = -1;
	Solution2 s1;
	cout << "dividend : " << dividend << endl;
	cout << "divisor : " << divisor << endl;
	cout << INT_MAX << endl;
	cout << INT_MIN << endl;
	cout << "long long: " << sizeof( long long ) << endl;
	cout << "long: " << sizeof( long ) << endl;
	cout << "long long: " << sizeof( long long) << endl;
	cout << "unsigned int: " << sizeof( unsigned int ) << endl;
	cout << "result : " << s1.divide( 0, 1 ) << endl;
	return 0;
}
