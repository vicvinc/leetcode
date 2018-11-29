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
var rotateRight = function(head, k) {
  let tail = head;
  if (head === null) return head;
  let len = 1;
  while (tail.next) {
    tail = tail.next;
    len++;
  }
  tail.next = head;
  let count = len - (k % len);
  while (count > 0) {
    head = head.next;
    tail = tail.next;
    count--;
  }
  tail.next = null;
  return head;
};

const makeList = arr => {
  const aLen = arr.length;
  let head = null;
  let tail = null;
  for (let i = 0; i < aLen; i++) {
    const cur = { val: arr[i], next: null };
    if (i === 0) {
      head = cur;
    } else {
      tail.next = cur;
    }
    tail = cur;
  }
  return head;
};

const t = [1, 2, 3, 4, 5];

console.log(rotateRight(makeList(t), 2));
