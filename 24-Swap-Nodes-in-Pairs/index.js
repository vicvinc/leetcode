/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function makeList(nums) {
  let head = null;
  let tail = null;

  for (let i = 0, ii = nums.length; i < ii; i++) {
    const node = new ListNode(nums[i]);
    if (i === 0) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = tail.next;
    }
  }
  return head;
}

function printNode(head) {
  while (head) {
    console.log("node", head.val);
    head = head.next;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function swapNode(prev, curr) {
  if (curr === null) {
    return prev;
  }
  const nextNode = curr.next;
  curr.next = prev;
  prev.next = nextNode;
  if (nextNode) {
    prev.next = swapNode(nextNode, nextNode.next);
  }
  return curr;
}

var swapPairs = function(head) {
  let myHead = head;
  if (myHead) {
    return swapNode(myHead, myHead.next);
  } else {
    return head;
  }
};

const list = makeList([1, 2, 3, 4, 5]);

printNode(swapPairs(list));
