/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
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

var mergeTwoLists = function(l1, l2) {
  const myHead = new ListNode(0);
  let curHead = myHead;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      const node = new ListNode(l2.val);
      curHead.next = node;
      curHead = node;
      l2 = l2.next;
    } else {
      const node = new ListNode(l1.val);
      curHead.next = node;
      curHead = node;
      l1 = l1.next;
    }
  }

  if (l1) {
    curHead.next = l1;
  }
  if (l2) {
    curHead.next = l2;
  }

  printNode(myHead.next);

  return myHead.next;
};

const l1 = makeList([1, 2, 3, 5, 10]);
const l2 = makeList([2, 4, 5, 6]);

const merged = mergeTwoLists(l1, l2);
