/*
Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Example 3:
Input: s = "a"
Output: "a"

Example 4:
Input: s = "ac"
Output: "a"
 
Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),

*/

var longestPalindrome = function(s) {
  if (s.length <= 1) return s; 
  let longestPal = s[0];
  let start = 0;
  let end = 1;
  while (start < (s.length - longestPal.length)) {
    while (end <= s.length) {
      console.log(start, end, s.slice(start, end))

      if (((end - start) > longestPal.length) && isPalindrome(s.slice(start, end))) {
        longestPal = s.slice(start, end);
      }
      end++;
    }
    start++;
    end = start + longestPal.length;
  }
  return longestPal;
};

var isPalindrome = function (str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 -i]) {
      return false;
    }
  }
  return true;
}

console.log(longestPalindrome("aaa"))