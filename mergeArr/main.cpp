#include <iostream>
#include <cstdlib>

using namespace std;

class Solution
{
public:
  void merge(int a[], int m, int b[], int n)
  {
    int i, j;
    for (i = 0, j = 0; i < m + j && j < n;)
    {
      if (a[i] > b[j])
      {
        pushBack(a, i, m + j, b[j]);
        //i++;
        j++;
      }
      else
      {
        i++;
      }
    }
    cout << "j: " << j << "i : " << i << endl;
    if (j < n)
    {
      for (int k = 0; j < n; j++)
      {
        a[m + n - j + k] = b[j];
        cout << "a[" << j << "]: " << a[j] << endl;
      }
    }
    return;
  }
  void pushBack(int a[], int i, int m, int b)
  {
    int tmp = b, pre = a[i], k;
    cout << "i : " << i << "b : " << b << endl;
    for (k = i + 1; k <= m; k++)
    {
      tmp = a[k];
      a[k] = pre;
      pre = tmp;
      //a[k+1] = a[k];
    }
    a[k] = tmp;
    a[i] = b;
    for (int k = 0; a[k] || k < m; k++)
    {
      cout << __LINE__ << " :a[" << k << "]: " << a[k] << endl;
    }
#if 0
	cout << "a[" << i << "]: " << a[i] << endl;
#endif
  }
};

int main(int argc, const char *argv[])
{
  Solution s1;
  int a[10] = {1, 2, 3};
  int b[10] = {4, 5, 6};
  s1.merge(b, 3, a, 3);
  for (int i = 0; i < 10; i++)
  {
    cout << a[i];
  }
  cout << endl;
  return 0;
}
