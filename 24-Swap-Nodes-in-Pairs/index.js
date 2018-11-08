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

function swapNode(a, b) {
  let temp = a.val;
  a.val = b.val;
  b.val = temp;
}

var swapPairs = function(head) {
  let myHead = head;
  while (myHead) {
    const next = myHead.next;
    if (next) {
      swapNode(myHead, next);
      myHead = next.next;
    } else {
      break;
    }
  }
  return head;
};

const list = makeList([1, 2, 3, 4, 5, 6, 7]);

swapPairs(list);

printNode(list);
