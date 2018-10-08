#include <algorithm>
#include <cstdlib>
#include <iostream>
#include <map>
#include <vector>

using namespace std;

class Solution {
public:
  vector<int> twoSum(vector<int> &numbers, int target) {
    vector<int>::iterator iviter, jviter;
    vector<int> resvector;
    map<int, int> resmap;
    int i = 0, j = 0, ii = numbers.size();
    // for( iviter = numbers.begin(); iviter != numbers.end(); iviter++) {
    for (; i < ii; i++) {
      if (resmap.find(numbers[i]) == resmap.end()) {
        resmap[target - numbers[i]] = i;
        // remap[i] = target - numbers[i];
      } else {
        resvector.push_back(resmap[numbers[i]] + 1);
        resvector.push_back(i + 1);
        break;
      }
    }
    return resvector;
  }
};

int main(int argc, const char *argv[]) {
  int num[9] = {1, 2, 11, 11, 11, 6, 11, 8, 9};
  int target = 9, i = 1;
  Solution S1;
  vector<int> numbers(num, num + 9);
  vector<int> solution(S1.twoSum(numbers, target));
  vector<int>::iterator riter;
  for (riter = solution.begin(); riter != solution.end(); riter++) {
    cout << "index " << *riter;
    if (i % 2 == 0)
      cout << endl;
    i++;
  }
  return 0;
}
