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

  return myHead.next;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const len = lists.length;
  // console.log("cur list len => ", len);
  if (len <= 1) {
    return lists[0];
  }

  if (len === 2) {
    return mergeTwoLists(lists[0], lists[1]);
  }

  const mid = ~~(len >> 1);
  // console.log("len, mid => ", len, mid);
  const left = lists.slice(0, mid);
  const right = lists.slice(mid, len);
  return mergeTwoLists(mergeKLists(left), mergeKLists(right));
};

const lists = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [6, 7, 8, 9],
  [5, 6, 7, 8, 9]
];

const nodeLists = lists.map(list => makeList(list));

printNode(mergeKLists(nodeLists));
