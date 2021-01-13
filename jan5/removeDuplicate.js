// Given the head of a sorted linked list, delete all 
// nodes that have duplicate numbers, leaving only 
// distinct numbers from the original list. Return the 
// linked list sorted as well.

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

// i: is a sorted linked list (object with val and next)
// o: a sorted linked list with no duplicates.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicates = function(head) {
  if (head.next === null) return head;

  const insertNode = (node, val) => {
    if(node.next === null) {
      node.next = {val: val, next: null}
      return
    }
    return insertNode(node.next, val)
  }

  let result = {val: head.val, next: null};
  let curVal = head.val;

  const helper = (node) => {
    if(node.val !== curVal) {
      insertNode(result, node.val);
      curVal = node.val;
    }
    if(node.next === null) {
      return;
    }
    helper(node.next);
    
  }    
  helper(head.next);

  return result;
};


var deleteDuplicates = function(head) {
  if (head.next === null) return head;
  
  const insertNode = (node, val) => {
    if(node.next === null) {
      node.next = {val: val, next: null};
      return;
    }
    return insertNode(node.next, val);
  }

  let result;
  let duplicateVal;

  const helper = (node) => {

    if(node.next !== null && node.val === node.next.val) {
      duplicateVal = node.val;
    }

    if(node.val !== duplicateVal) {
      if (!result) {
        result = {val: node.val, next: null}
      } else {
        insertNode(result, node.val)
      }
    }

    if(node.next === null) {
      return;
    }
    helper(node.next);
    
  }    
  helper(head.next);

  return result;
};


let testNode = {val: 1, next: {val: 1, next: {val: 1, next: {val: 2, next: {val: 2, next: {val: 2, next: {val: 4, next: null}}}}}}}
console.log(JSON.stringify(deleteDuplicates(testNode)))


