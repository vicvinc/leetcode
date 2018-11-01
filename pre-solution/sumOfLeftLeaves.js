/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const getRightValue = root => {
  if (!root) {
    return 0
  }
  if (!root.left && !root.right) {
    return 0
  }
  return getLeftValue(root.left) + getRightValue(root.right)
}
const getLeftValue = root => {
  if (!root) {
    return 0
  }

  if (!root.left && !root.right) {
    return root.val
  }

  return  getLeftValue(root.left) + getRightValue(root.right)
}

var sumOfLeftLeaves = function(root) {

  if (!root) return 0
  if (!root.left && !root.right) return 0
  return  getLeftValue(root.left) + getRightValue(root.right)
}

