/* 
Implement a basic calculator to evaluate a simple expression
string.

The expression string contains only non-negative integers,
+, -, *, / operators and empty spaces. The integer division 
should truncate toward zero.

Example 1:
Input: "3+2*2"
Output: 7

Example 2:
Input: " 3/2 "
Output: 1

Example 3:
Input: "3 + 5 / 2"
Output: 5

*/

// 53 + 674 / 32

// i: string representing a math expression
// o: number evaluating the expression
// c: assume input only contains positive numbers and +, -, *, /
// will there be a space between each operation? no
// must start with a number (how to tell if the number is single or multi digit)
// how to follow order of operations


// first attempt
var calculate = function(s) {
  // first separate into an array where [num, operation, num,...]
  var expression = [];

  helper = (string) => {
    if (string.length === 0) {
      return;
    }
    if (string[0] === ' ') {
      return helper(string.slice(1))
    }
    if (isOperation(string[0])) {
      expression.push(string[0])
      return helper(string.slice(1))
    }
    var i = 0;
    while ( isInt(string[i]) && i < string.length) {
      i++
    }
    expression.push(Number(string.slice(0, i)))
    return helper(string.slice(i));
  };

  helper(s);
  console.log("1", expression)
    
  // second preform the operations following appropriate order of operations.
  // mult and div first
  for (var i = 0; i < expression.length; i++) {
    if (expression[i] === '*') {
      let result = expression[i-1] * expression[i+1]
      expression.splice(i-1, 3, result )
      i = i - 1
    }
    if (expression[i] === '/') {
      let result = Math.floor(expression[i-1] / expression[i+1])
      expression.splice(i-1, 3, result )
      i = i - 1
    }
  } 

  for (var i = 0; i < expression.length; i++) {
    if (expression[i] === '+') {
      let result = expression[i-1] + expression[i+1]
      expression.splice(i-1, 3, result )
      i = i - 1
    }
    if (expression[i] === '-') {
      let result = Math.floor(expression[i-1] - expression[i+1])
      expression.splice(i-1, 3, result )
      i = i - 1
    }
  } 

  return expression[0];

};

var isOperation = function(s) {
  return ['+', '-', '*', '/'].includes(s)
}

var isInt = function(s) {
  return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(s)
}

calculate("14 + 21/3 * 4")
calculate("4/ 2 + 1 * 3")
calculate("42 * 10 /5+3")