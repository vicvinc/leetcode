/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const head = x => x[0];
const tail = x => x[x.length - 1];

var deleteDuplicates = function(nodeHead) {
  const stack = [];
  let current = nodeHead;
  let remove = "#";
  while (current) {
    if (stack.length === 0) {
      stack.push(current);
      current = current.next;
      continue;
    }
    let t = tail(stack);
    if (t.val === current.val) {
      remove = current.val;
      stack.push(current);
    } else {
      let tt = tail(stack);
      while (tt && tt.val === remove) {
        stack.pop();
        tt = tail(stack);
      }
      if (tt) tt.next = current;
      stack.push(current);
      remove = "#";
    }
    current = current.next;
    // console.log("stack", stack.map(x => x.val), remove);
  }
  if (remove !== "#") {
    let tt = tail(stack);
    while (tt && tt.val === remove) {
      stack.pop();
      tt = tail(stack);
    }
  }
  const t = tail(stack);
  if (t) t.next = null;
  // console.log("ans stack", stack);
  return head(stack) || null;
};

const t = [];
const nodeList = t.map(x => ({ next: null, val: x }));
for (let i = 0; i < nodeList.length - 1; i++)
  nodeList[i].next = nodeList[i + 1];

const printNodeList = head => {
  let h = head;
  while (h) {
    console.log(h.val);
    h = h.next;
  }
};

printNodeList(deleteDuplicates(head(nodeList)));
