/*
Given a positive integer K, you need to find the length of the smallest positive 
integer N such that N is divisible by K, and N only contains the digit 1.

Return the length of N. If there is no such N, return -1.

Note: N may not fit in a 64-bit signed integer.

Example 1:
Input: K = 1
Output: 1
Explanation: The smallest answer is N = 1, which has length 1.

Example 2:
Input: K = 2
Output: -1
Explanation: There is no such positive integer N divisible by 2.

Example 3:
Input: K = 3
Output: 3
Explanation: The smallest answer is N = 111, which has length 3.
 
Constraints:
1 <= K <= 10^5

Notes:
N = 1
N = 11
N = 111 = 11 * 10 + 1  
N = 1111 = 111 * 10 + 1 = ((1 * 10 + 1) * 10 + 1) * 10 + 1


Remainders: 
for r = N % K // N = nK + r

if            N = 11,              11 = nK + r
then  N = 111 = 11 * 10 + 1,    111 = (nK + r) * 10 + 1 && 111 = n'K + r' therefore (10r + 1) % K = r' 

*/

// let n = 6
// console.log(11%n, 111%n, 1111%n,11111%n, 111111%n, 1111111%n, 11111111%n, 111111111%n, 1111111111%n, 11111111111%n)

var smallestRepunitDivByK = function(K) {
  let remainders = new Set();
 
  let remainder = 0;

  for (var count = 1; ;count++) {
    remainder = (10 * remainder + 1) % K;
    if (remainder === 0) {
      return count
    }

    if (remainders.has(remainder)) {
      return -1
    }

    remainders.add(remainder)
  }

  // helper = (n) => {
  //   count++
  //   let remainder = n % K;
  //   if (remainder === 0) {
  //     return count
  //   }
  //   if (remainders.has(remainder)) {
  //     return -1
  //   }
  //   remainders.add(remainder)
  //   return helper(10 * remainder + 1)
  // }
  // return helper(1)

};

console.log(smallestRepunitDivByK(9))
