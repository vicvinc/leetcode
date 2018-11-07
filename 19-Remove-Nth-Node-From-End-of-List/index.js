/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function printNode(head) {
  while (head) {
    console.log("node", head.val);
    head = head.next;
  }
}

// two pass way
var removeNthFromEnd2 = function(head, n) {
  let len = 1;
  let visitHead = head;

  while (visitHead.next) {
    len++;
    visitHead = visitHead.next;
  }

  const nth = len - n;

  if (nth === 0) {
    head = head.next;
  } else {
    let cth = 1;
    visitHead = head;
    while (cth < nth && visitHead.next) {
      visitHead = visitHead.next;
      cth++;
    }

    const nextNode = visitHead.next;
    // delete
    if (nextNode.next) {
      visitHead.next = nextNode.next;
    } else {
      visitHead.next = null;
    }
  }

  return head;
};

// one pass way
const removeNthFromEnd = (head, n) => {
  const myHead = new ListNode(0);
  myHead.next = head;

  let first = myHead;
  let second = myHead;
  let space = 1;

  while (space <= n + 1) {
    first = first.next;
    space++;
  }

  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  // remove
  second.next = second.next.next;

  return myHead.next;
};

const t = [1];

const ans = removeNthFromEnd(head, 1);
printNode(ans);
