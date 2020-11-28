/*
Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.

 

Example 1:

Input: s = "aaabb", k = 3
Output: 3
Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.
Example 2:

Input: s = "ababbc", k = 2
Output: 5
Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
 

Constraints:

1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 105
*/

var longestSubstring = function (s, k) {
  let substringLength = 0;

  let counter = {}; // {char: {count: num, index:[]}}
  for (var i = 0; i < subString.length; i++) {
    if (!counter[s[i]]) {
      counter[s[i]] = {count: 1, index: [i]}
    } else {
      counter[s[i]].count++;
      counter[s[i]].index.push(i)
    }
  }

  let boarder = []
  for (var key in counter) {
    if (counter[key].count < k) {
      boarder.push(counter.index);
    }
  }
  
  boarder.sort(function(a, b) {
    return a - b;
  });
  console.log(boarder)
  return substringLength;
};

console.log(longestSubstring("bbaaacdb", 3));
