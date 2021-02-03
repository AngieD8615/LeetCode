/*
sortList.js
---
PROMPT
---
Given the head of a linked list, return the list after sorting it in ascending order.
Try to sort the linked list in O(n logn) time and O(1) memory (i.e. constant space).
---
EXAMPLES
---
Input: head = [4,2,1,3]
Output: [1,2,3,4]
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Input: head = []
Output: []
---
CONSTRAINTS
---
The number of nodes in the list is in the range [0, 5 * 10^4].
-10^5 <= Node.val <= 10^5
Definition for singly-linked list:
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val);
     this.next = (next===undefined ? null : next);
  }
*/
// i: given the head of a linked list: {val: 4, next: {val: 0, next: {val: 10, next: {val: -1, next: null}
// 0: return linked list: {val: -1, next: {val: 0, next: {val: 4, next: {val: 10, next: null}
// Space complexity is constant so can not build a new data structure to store/sort.  -> change the current linked list in place?

var sortList = function (head) {

  let finished;
  
  const sort = (node) => {
    while (node.next !== null) {
      if (node.val > node.next.val) {
        let lesser = node.next.val;
        node.next.val = node.val;
        node.val = lesser;
        finished = false;
      }
      node = node.next;
      console.log(node)
    }
  }
  while (!finished) {
    finished = true;
    sort(head)
  }
  return JSON.stringify(head);
};

console.log(sortList({val: 4, next: {val: 0, next: {val: 10, next: {val: -1, next: null}}}}))
