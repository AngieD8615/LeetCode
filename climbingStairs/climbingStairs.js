/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct
ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:

1 <= n <= 45
*/

var climbStairs = function(n) {
  if (n === 0) return 0;
  let count = 0;
  let previouslyCalculated = {};

  const helper = (stepsLeft) => {
    if (stepsLeft === 0 || stepsLeft === 1) {
      count++;
      if (!previouslyCalculated[stepsLeft]) {
        previouslyCalculated[stepsLeft] = count
      }
      return;
    } else if (stepsLeft > 1) {
        helper(stepsLeft - 1);
      
        helper(stepsLeft - 2);
    } else {
      return;
    }
  }

  helper(n);
  return count;
};

// let start = new Date()
console.log(climbStairs(6));
// let end = new Date()
// console.log(end - starts)