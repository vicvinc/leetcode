var searchMatrix_0 = function(matrix, target) {
    var mLen = matrix.length
    if (mLen === 0) {
      return false
    }

    var total = []
    for (var i = 0; i < mLen; i++) {
      total = total.concat(matrix[i])
    }
    return total.indexOf(target) > -1 ? true : false
}

// find n in array a

const searchArray = (a, n) => {
  let len = a.length
  if (len === 0) {
    return false
  }

  if (a[0] > n || a[len-1] < n) {
    return false
  }
  if (len === 1) {
    return a[0] === n
  } else {
    let mid = Math.ceil(len / 2)
    let left = a.slice(0, mid)
    let right = a.slice(mid, len)
    return searchArray(left, n) || searchArray(right, n)
  }
}

const searchMatrix = (a, n) => {
  let len = a.length
  if (len === 0) {
    return false
  }
  if (len === 1) {
    return searchArray(a[0], n)
  } else {
    let head = a[0]
    let tail = a[len-1]
    if (head[0] > n || tail[tail.length -1] < n) {
      return false
    }
    let mid = Math.ceil(len / 2)
    let left = a.slice(0, mid)
    let right = a.slice(mid, len)
    return searchMatrix(left, n) || searchMatrix(right, n)
  }
}

var m = [[1,3,5,7],[10,11,16,20],[23,30,34,50]]

var t = 50

var rt = searchMatrix(m ,t)

console.log(rt)