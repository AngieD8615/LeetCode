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
  if (n === 0) return 0
  if (n === 1) return 1

  let count = 0
  const helper = (stepsLeft) => {
    // baseCase
    if (stepsLeft <= 1) {
      count++
      return
    }
    helper(stepsLeft - 1) // take 1 step
    helper(stepsLeft - 2) // take 2 step
  }
  helper(n)
  return count
};

// O(n)
var climbStairs2 = function(n) {
  if (n === 0) return 0  // is an edge case
  if (n === 1) return 1
  if (n === 2) return 2
  let results = [1, 2]
  while (results.length < n) {
    let last = results[results.length - 1]
    let secondLast = results[results.length - 2]
    results.push(last + secondLast)
  }
  return results[results.length - 1]
};

// console.log(climbStairs2(0) === 0);
// console.log(climbStairs2(1) === 1);
// console.log(climbStairs2(2) === 2);
// console.log(climbStairs2(3) === 3);
// console.log(climbStairs2(4) === 5);
// console.log(climbStairs2(5) === 8);
// console.log(climbStairs2(10) === 89);
console.log(climbStairs2(50));
