/*
Given an array nums, write a function to move all 0's to the end of it while 
maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

[0,1,0,3,12]

notes: 
1) remove all zeros -> inc count

2) add all the zeros at the end

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

var moveZeroes = function(nums) {
  var numOfZeros = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      numOfZeros++;
      i--;
    }
  }
  for (var i = 0; i < numOfZeros; i++) {
    nums.push(0);
  }
  return nums;
}

console.log(moveZeroes([1,0,1,0,2,0,3,4]))