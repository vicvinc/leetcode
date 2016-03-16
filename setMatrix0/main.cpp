#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

class Solution {
public:
    void setZeroes(vector<vector<int> > &matrix) {
	int m = 0, mm = matrix.size();
	int n = 0, nn = matrix[0].size();
	bool *zerom = new bool[mm]();
	bool *zeron = new bool[nn]();
#if 0
        vetcor<int>::iterator miter, niter;
	for( miter = matrix.begin(); miter != matrix.end(); miter++) {
		for ( niter = *miter.begin(); niter != *miter.end(); niter++ ) {
			if( *niter == 0 ) {
				*niter = true;	
			}
		}
	}
#endif
	for( m = 0; m < mm; m++) {
		for( n = 0; n < nn; n++) {
			if( !matrix[m][n]) {
				zerom[m] = true;
				zeron[n] = true;	
			}
		}
	}
	for( m = 0; m < mm; m++) {
		for( n = 0; n < nn; n++) {
			if( zerom[m] || zeron[n] ) {
				matrix[m][n] = 0;	
			}
		}
	}
    };
#if 0 
    void setRowzero( vector<vector<int> > &matrix, int row ) {
	int col = matrix[1].size();
	for( int i = 0; i < col; i++ ) {
		matrix[row][i] = 0;
	}	
    }
    void setColzero( vector<vector<int> > &matrix, int col ) {
   	int row = matrix.size();
	for( int i = 0; i < row; i++ ) {
		matrix[i][col] = 0;
	}
    }
#endif
};

int main( int argc, const char * argv[])
{
	Solution s1;
	vector<vector<int> > matrix;
	matrix.resize(1);
	matrix[0].resize(1);
	//matrix[1].resize(2);
	for( int m = 0; m < 1; m++) {
		for( int n = 0; n < 1; n++) {
			matrix[m][n] = 1;
		}
	}
	matrix[0][0] = 0;
	s1.setZeroes(matrix);
	
	for( int m = 0; m < 1; m++) {
		for( int n = 0; n < 1; n++) {
			cout << matrix[m][n] << endl;
		}
	}
	
	return 1;
}

