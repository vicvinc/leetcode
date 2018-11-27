/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const col = matrix.length;
  if (col === 0) return []; //assert

  const row = matrix[0].length;
  if (row === 0) return []; //assert

  const [RIGHT, DOWN, LEFT, UP] = [0, 1, 2, 3];
  // right: i, j+1, down: i+1,j, left: i, j-1, up: i-1,j
  const ans = [];
  let [i, j] = [0, 0];
  let [visited, d] = [0, RIGHT];
  while (visited < row * col) {
    // const dMap = {
    //   [RIGHT]: "RIGHT",
    //   [DOWN]: "DOWN ",
    //   [LEFT]: "LEFT ",
    //   [UP]: "UP   "
    // };
    // console.log("=>", dMap[d], i, j, matrix[i][j], ans);
    // visit node
    if (matrix[i][j] !== "#") {
      ans.push(matrix[i][j]);
      matrix[i][j] = "#";
      visited++;
    }
    switch (d) {
      case RIGHT:
        if (j + 1 === row || matrix[i][j + 1] === "#") {
          // change direction
          d = (d + 1) % 4;
          i = Math.min(i + 1, col - 1);
        } else {
          j++;
        }
        break;
      case DOWN: {
        if (i + 1 === col || matrix[i + 1][j] === "#") {
          d = (d + 1) % 4;
          j = Math.max(j - 1, 0);
        } else {
          i++;
        }
        break;
      }
      case LEFT:
        {
          if (j === 0 || matrix[i][j - 1] === "#") {
            d = (d + 1) % 4;
            i = Math.max(i - 1, 0);
          } else {
            j--;
          }
        }
        break;
      case UP: {
        if (i === 0 || matrix[i - 1][j] === "#") {
          d = (d + 1) % 4;
          j = Math.min(j + 1, row - 1);
        } else {
          i--;
        }
        break;
      }
    }
  }

  return ans;
};

const t = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const t1 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

console.log(spiralOrder(t));
