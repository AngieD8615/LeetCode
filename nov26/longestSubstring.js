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

var longestSubstring = function(s, k) {
  // count the frequency of each char
  let count = {}
  for (var i = 0; i < s.length; i++) {
    if (!count[s[i]]) {
      count[s[i]] = 1;
    } else {
      count[s[i]]++;
    }
  }
  // iterate through the count object
    // if the count is equal to or higher than k
      // sum the values
  
  let substringLength = 0
  for (var key in count) {
    if (count[key] >= k) {
      substringLength += count[key];
    }
  }
  // return the sum
  return substringLength;
};

console.log(longestSubstring("ababbc", 2))
