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

var deleteDuplicates = function(head) {
  if (!head) return head;
  let current = head;
  while (current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
      continue;
    }
    current = current.next;
  }
  return head;
};
