#include <string>
#include <iostream>

using namespace std;

class Solution
{
public:
  int romanToInt(string s)
  {
    return rtoi(s);
  };
#if 1

  int ctoi(char c)
  {
    int r = 0;
    switch (c)
    {
    case 'I':
      r = 1;
      break;
    case 'V':
      r = 5;
      break;
    case 'X':
      r = 10;
      break;
    case 'L':
      r = 50;
      break;
    case 'C':
      r = 100;
      break;
    case 'D':
      r = 500;
      break;
    case 'M':
      r = 1000;
      break;
    }
    return r;
  }
  int rtoi(string s)
  {
    int result = ctoi(s[0]);
    for (int i = 1; i < s.size(); i++)
    {
      char curc = s[i];
      char prec = s[i - 1];
      int curi = ctoi(curc);
      int prei = ctoi(prec);
      //"XI"
      if (curi <= prei)
      {
        result += curi;
      }
      else
      {
        //iiv
        result = curi - prei + result - prei;
      }
    }
    return result;
  }

#endif
};

int main(int argc, const char *argv[])
{
  Solution s1;
  string s("XXLIIX");
  if (argc > 1)
  {
    s = argv[1];
  }
  cout << s << "-->" << s1.romanToInt(s) << endl;

  return 1;
}
