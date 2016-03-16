#include <iostream>
#include <string>

using namespace std;

class Solution {
  public:
    string longestPalindrome(string s) {
        string ms = s;
        string fs;
        int i = 0, slen = 0, curMax = 0, curIdx = 0;
        size_t curPos = 0, nextPos = 0;
        //std::string::iterator it=fs.begin();
        
        slen = ms.size();
        fs.resize(slen);
        
        if( slen == 1 ) {
        		return ms;	
        }
        for( i = 0; i < slen ; i++ ) {
                for( int j = i; j < slen-1; j++) {
                        fs.insert( fs.begin(), ms[j] );
                        curPos = ms.find( fs, j );
                        int fz = fs.size();
                        if( curPos == j ) {
                                if( fz*2 - 1 > curMax ) {
                                        curMax = fz*2 - 1;
                                        curIdx = j;
                                }
                        }
                        nextPos = ms.find( fs, j+1 );
                        if( nextPos == j+1 ) {
                                if( fz*2 > curMax ) {
                                        curMax = fz*2;
                                        curIdx = j+1;
                                }
                        }
                }
                fs.clear();
        }
        cout << "curMax : " << curMax << "curIdx : " << curIdx << endl;
        return s.substr( curIdx - curMax/2, curMax );
    };
};

int main( int argc, const char *argv[] )
{
	string str("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy");
	Solution s1;
	cout << "bb --> " << s1.longestPalindrome( "bb" ) << endl;
	cout << "a --> " << s1.longestPalindrome( "a" ) << endl;
	cout << "ll --> " << s1.longestPalindrome( str ) << endl;
	//cout << "bb --> " << s1.longestPalindrome( "bb" ) << endl;
	//cout << "bb --> " << s1.longestPalindrome( "bb" ) << endl;


	return 0;
}
