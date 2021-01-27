/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a 
different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any 
profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 
Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

[7,1,5,3,6,4]
 | |

need 2 pointers left and right
need max difference (start by assigning value to 0)
have right iterate through the array
  if arr[right] > arr[left] -> see if the diff is highest. reassign if needed
  if arr[right] > arr[left] -> reassign left to right
return difference

*/

var maxProfit = function(prices) {
  if (prices.length <= 1) return 0;
  let maxProf = 0;
  let left = 0;
  for (let right = 1; right < prices.length; right++) {
    let final = prices[right];
    let initial = prices[left];
    if (final - initial > maxProf) {
      maxProf = final - initial;
    }
    if (prices[right] < prices[left]) {
      left = right;
    }
  }
  return maxProf;
};

console.log(maxProfit([7,1,5,3,6,4]));