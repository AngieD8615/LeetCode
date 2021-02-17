// Number of Good Pairs
// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

// Example 1:     0 1 2 3 4 5
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:
// Input: nums = [1,2,3]
// Output: 0
 
// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

var numIdenticalPairs = function(nums) {
  if (nums.length <= 1) return 0;
  
  nums = nums.sort((a,b) => a - b)

  let count = 0;
  let left = 0;
  let right = 1;
  while (right < nums.length) {
    if (nums[left] === nums[right]) {
      if (right === nums.length - 1) {
        let difference = right - left;
        count += (difference * (difference + 1) / 2)
      }
    } else {
      let difference = right - left;
      if (difference !== 1) {
        count += (difference * (difference - 1) / 2)
      }
      left = right;
    }
    right++
  }
  return count;
};