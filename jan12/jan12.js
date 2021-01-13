// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 
var addTwoNumbers = function(l1, l2) {
  let head1 = l1;
  let head2 = l2;
  let carryOver = 0;
  let result = [];
  while (head1.next !== null && head2.next !== null) {
    if (head1.next === null) head1.val = 0;
    if (head2.next === null) head2.val = 0;

    let sum = ( head1.val + head2.val + carryOver ) % 10; 
    let carryOver = Math.floor( ( head1.val + head2.val + carryOver ) / 10 )
    
    result.push(sum);
    if (carryOver) {
      if (head1.next !== null) {
        head1.val = head1.val + 1;
      } else {
        head2.val = head2.val + 1;
      }
    }
  }
  console.log(result);
};

addTwoNumbers()