/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const head = x => x[0];
const tail = x => x[x.length - 1];
var partition = function(head, x) {
  const [h1, h2] = [{ next: null }, { next: null }];
  let [p1, p2] = [h1, h2];
  let myHead = head;
  while (myHead) {
    if (myHead.val < x) {
      p1.next = myHead;
      p1 = myHead;
    } else {
      p2.next = myHead;
      p2 = myHead;
    }
    myHead = myHead.next;
  }
  p2.next = null;
  p1.next = h2.next;
  return h1.next;
};

const t = [4, -1, 0, 0, 1, 3, 4, 5, 2, 2, 1, 2, 3, 4];
const t2 = [];

const makeList = arr => {
  const list = arr.map(x => ({ val: x, next: null }));
  for (let i = 0; i < list.length - 1; i++) {
    list[i].next = list[i + 1];
  }
  return head(list);
};

const printList = head => {
  let myHead = head;
  const arr = [];
  while (myHead) {
    arr.push(myHead.val);
    myHead = myHead.next;
  }
  console.log(arr);
};

printList(partition(makeList(t2), 2));
