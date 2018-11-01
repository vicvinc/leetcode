/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

const DFS = (sq, dp, matrix, row, col) => {

  while (sq.length > 0) {
    let head = sq[0]
    let i = sq[0][0], j = sq[0][1] // (i, j) => [i, j]

    let top = i - 1, bottom = i + 1, left = j - 1, right = j + 1
    if (top >=0 && !dp[top][j] && matrix[i][j] <= matrix[top][j]) {
      dp[top][j] = true
      sq.push([top, j])
    }
    
    if (bottom <= row-1 && !dp[bottom][j] && matrix[i][j] <= matrix[bottom][j]) {
      dp[bottom][j] = true
      sq.push([bottom, j])
    }

    if (left >= 0 && !dp[i][left] && matrix[i][j] <= matrix[i][left]) {
      dp[i][left] = true
      sq.push([i, left])
    }

    if (right <= col - 1 && !dp[i][right] && matrix[i][j] <= matrix[i][right]) {
      dp[i][right] = true
      sq.push([i, right])
    }
    sq.shift()
  }

}

const BFS = (stack, dp, matrix, row, col) => {

  while (stack.length > 0) {
    let tail = stack[stack.length -1]
    let i = tail[0], j = tail[1] // (i, j) => [i, j]

    let top = i - 1, bottom = i + 1, left = j - 1, right = j + 1

    if (top >=0 && !dp[top][j] && matrix[i][j] <= matrix[top][j]) {
      dp[top][j] = true
      stack.pop()
      stack.push([top, j])
      BFS(stack, dp, matrix, row, col)
    }
    
    if (bottom <= row-1 && !dp[bottom][j] && matrix[i][j] <= matrix[bottom][j]) {
      dp[bottom][j] = true
      stack.pop()
      stack.push([bottom, j])
      BFS(stack, dp, matrix, row, col)
    }

    if (left >= 0 && !dp[i][left] && matrix[i][j] <= matrix[i][left]) {
      dp[i][left] = true
      stack.pop()
      stack.push([i, left])
      BFS(stack, dp, matrix, row, col)
    }

    if (right <= col - 1 && !dp[i][right] && matrix[i][j] <= matrix[i][right]) {
      dp[i][right] = true
      stack.pop()
      stack.push([i, right])
      BFS(stack, dp, matrix, row, col)
    }

    stack.pop()
    
  }
}

const pacificAtlantic1 = function(matrix) {
  let row = matrix.length
  
  if (row === 0) {
      return []
  }

  let col = matrix[0].length
  let dp = new Array(row), dp1 = new Array(row)

  for (let k = 0; k < dp.length; k++) {
    dp[k] = new Array(col)
    dp1[k] = new Array(col)
  }

  let sq = [], sq1 = []
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 || j === 0) { 
        dp[i][j] = true // mark to be visited
        sq.push([i, j])
      }
      if ( i === row-1 || j === col -1) {
        dp1[i][j] = true // mark to be visited
        sq1.push([i, j])
      }
    }
  }
  
  DFS(sq, dp, matrix, row, col)    
  DFS(sq1, dp1, matrix, row, col)    

  let rt = []
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if ((dp[i][j] && dp1[i][j])) {
        rt.push([i, j])
      }
    }
  }
  return rt
}

const pacificAtlantic = function(matrix) {
  let row = matrix.length
  
  if (row === 0) {
      return []
  }

  let col = matrix[0].length
  let dp = new Array(row), dp1 = new Array(row)

  for (let k = 0; k < dp.length; k++) {
    dp[k] = new Array(col)
    dp1[k] = new Array(col)
  }

  let stack = [], stack1 = []
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 || j === 0) { 
        dp[i][j] = true // mark to be visited
        stack.push([i, j])
      }
      if ( i === row-1 || j === col -1) {
        dp1[i][j] = true // mark to be visited
        stack1.push([i, j])
      }
    }
  }
  
  BFS(stack, dp, matrix, row, col)    
  BFS(stack1, dp1, matrix, row, col)    

  let rt = []
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if ((dp[i][j] && dp1[i][j])) {
        rt.push([i, j])
      }
    }
  }
  
  return rt
}

let t = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// let t1 = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// let k = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// let result = [[0,4],[1,3],[1,4],[2,2],[2,3],[2,4],[3,0],[3,1],[3,3],[3,4],[4,0],[4,1],[4,2],[4,3],[4,4]]
let result = [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

pacificAtlantic(t)