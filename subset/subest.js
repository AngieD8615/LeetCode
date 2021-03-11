/*
78. Subsets Medium

Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]

Constraints:
1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/

var subsets = function(nums) {  
  let result = []
   
  const helper = (curArr, curInd) => {  
    if (curInd <= nums.length) {
      result.push(curArr)   
      for (var i = curInd; i < nums.length; i++) {  
        helper([...curArr, nums[i]], i + 1)  
      }
    }
  }
  helper([], 0)
  return result
};

console.log(subsets([1,2,3]))
