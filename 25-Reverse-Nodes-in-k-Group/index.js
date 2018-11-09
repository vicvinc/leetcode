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
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function(head, k) {
  let len = 0;
  let arr = [];
  let myHead = head;

  while (myHead) {
    arr.push(myHead.val);
    myHead = myHead.next;
    len++;
  }
  let ans = [];

  for (let i = 0; i < len; i += k) {
    var tmp;

    if (i + k > len) {
      tmp = arr.slice(i, len);
    } else {
      tmp = arr.slice(i, i + k);
      tmp.reverse();
    }
    ans.push(tmp);
  }

  let res = ans.reduce((acc, cur) => {
    acc = acc.concat(cur);
    return acc;
  }, []);

  res = res.map(x => new ListNode(x));

  for (let i = 0, ii = res.length; i < ii; i++) {
    res[i].next = res[i + 1];
  }

  return res[0];
};

const reverseKGroup1 = (head, k) => {
  let tail = head; // indicate the latest one to be connected
  for (let i = 0; i < k; i++) {
    if (!tail) return head;
    tail = tail.next;
  }
  let last = head; // current the head, but the last of a group after reversion
  for (let i = 0; i < k; i++) {
    let temp = head.next;
    head.next = tail;
    tail = head;
    head = temp;
  }
  last.next = reverseKGroup(last.next, k);
  return tail;
};

const t = new Array(50).fill(0).map((x, i) => i);
const list = makeList(t);

const swaped = reverseKGroup1(list, 5);

// printNode(swaped);
