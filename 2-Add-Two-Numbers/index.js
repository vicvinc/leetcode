/**
 *
 * @param {*BigNumber} m
 * @param {*BigNumber} n
 */
const twoSum = (m, n) => {
  const a = m.reverse();

  const b = n.reverse();

  let carry = 0;

  const largerArray = a.length >= b.length ? a : b;
  const smallerArray = a.length >= b.length ? b : a;

  return largerArray.reduce((acc, cur, idx) => {
    if (idx < smallerArray.length) {
      const added = parseInt(cur) + parseInt(smallerArray[idx]) + carry;
      if (added >= 10) {
        carry = 1;
        acc.push(added % 10);
      } else {
        carry = 0;
        acc.push(added);
      }
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
};

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

var addTwoNumbers = function(list1, list2) {
  let l1 = list1;
  let l2 = list2;

  const head = new ListNode(0);
  let current = head;

  head.next = current;

  let carry = 0;

  while (l1 || l2) {
    let curNode = new ListNode(0);
    let sum = 0;
    if (l1 && l2) {
      sum = l1.val + l2.val + carry;
    } else if (l1) {
      sum = l1.val + carry;
    } else if (l2) {
      sum = l2.val + carry;
    }
    if (sum >= 10) {
      carry = 1;
      curNode.val = sum % 10;
    } else {
      carry = 0;
      curNode.val = sum;
    }
    current.next = curNode;
    current = current.next;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  if (carry) {
    current.next = new ListNode(1);
  }
  return head.next;
};

const head1 = new ListNode(1);
let cur = new ListNode(8);
head1.next = cur;

const head2 = new ListNode(0);
// cur = new ListNode(2);
// cur.next = new ListNode(3);
// head2.next = cur;

console.log(addTwoNumbers(head1, head2));
