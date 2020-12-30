/*
Given a non-empty array nums containing only positive integers, find if the array can be partitioned
into two subsets such that the sum of elements in both subsets is equal.

Example 1:
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].

Example 2:
Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100
*/

const canPartition = (arr) => {
  const sum = arr.reduce((accum, curVal) => {
    return accum + curVal;
  })

  if (sum % 2 === 1) {
    return false;
  }
  
  arr = arr.sort((a, b) => {
    return a - b
  })
  // need to find some combination of numbers from arr that sums to sum / 2
  let sumNeeded = sum / 2;

  const helper = (index, stillNeed) => {
    if (stillNeed === 0) {
      return true;
    }
    if (index === arr.length - 1) {
      return false;
    }
    while (stillNeed > 0) {
      let nextIndex = index + 1;
      let nextStillNeeded = stillNeed - arr[index];
      return helper(nextIndex, nextStillNeeded)
    }

  }

  console.log(arr, sum)
  return helper(0, sumNeeded)

}

console.log(canPartition([1, 5, 11, 5]))  // need to find a set of nums that add to 14.