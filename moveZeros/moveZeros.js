/*
Given an array nums, write a function to move all 0's to the end of it while 
maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

[0,1,0,3,12]

notes: slice out and push 0 to the end

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

var moveZeroes = function(nums) {
  let lastIndexToCheck = nums.length;
  for (var i = 0; i < lastIndexToCheck; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      lastIndexToCheck--;
    }
  }
  return nums;
};

console.log(moveZeroes([0,1,0,3,12]))