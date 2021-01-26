/*
Given an array nums of 0s and 1s and an integer k, return True if all 1's 
are at least k places away from each other, otherwise return False.

Example 1:
Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
Explanation: Each of the 1s are at least 2 places away from each other.

Example 2:
Input: nums = [1,0,0,1,0,1], k = 2
Output: false
Explanation: The second 1 and third 1 are only one apart from each other.

Example 3:
Input: nums = [1,1,1,1,1], k = 0
Output: true

Example 4:
Input: nums = [0,1,0,1], k = 1
Output: true
 
Constraints:
1 <= nums.length <= 105
0 <= k <= nums.length
nums[i] is 0 or 1
*/


// use a 2 pointer system. both start out on the left.
// move left pointer until it hits a 1. Then move right to the next 1.
// iterate through the arr while R < arr. length
// check distance. 
  // if distance is less than k -> return false
// return true

// ex 1: nums = [1,0,0,0,1,0,0,1], k = 2
//               L R
//               L       R     --> R - L - 1= 4 - 0 - 1 = 3 -->  3 >= 2 --> good
//                       L R
//                       L     R   --> R - L - 1 = 7 - 4 - 1 --> 2 >= 2 --> good

var kLengthApart = function(nums, k) {
  let left = 0;
  
  // init left and right
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      left = i;
      break;
    }
    if (i === nums.length - 1) {
      return true;
    }
  }
  for (var right = left + 1; right < nums.length; right++) {
    if (nums[right] === 1) {
      if (right -left - 1 < k) return false;
      left = right;
    }
  }
  return true;
};

console.log(kLengthApart([1,0,0,0,1,0,1], 2))
