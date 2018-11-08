/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function swapNode(prev, curr) {
  if (curr === null) {
    return;
  }
  const nextNode = curr.next
  prev.next = nextNode;
  if (nextNode.next) {
    curr.next = nextNode.next
  }
}

function reversKNodes(head, k) {
  const mid = ~~(k >> 1);
  const oddK = k % 2 === 1;
  let prev = 
}
var reverseKGroup = function(head, k) {};
