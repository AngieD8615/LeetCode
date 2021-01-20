/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([)]"
Output: false

Example 5:
Input: s = "{[]}"
Output: true
*/

var isValid = function(s) {
  if (s.length % 2 === 1) return false;
  let stack = [];
  let pairs = {
    "{": "}",
    "[": "]",
    "(": ")"
  }
  for (var i = 0; i < s.length; i++) {
    if (["[", "{", "("].includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (pairs[stack[stack.length - 1]] === s[i]) {
        stack.pop();
      } else {
        return false
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("(("));