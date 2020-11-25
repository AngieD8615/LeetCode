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
  s = s.replace(/\s/g, '');
  
  var expression = [];

  helper = (string) => {
    if (string.length === 0) {
      return;
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
  console.log("array expression", expression)
    

  let stack = [];
  for (var i = 0; i < expression.length; i++) {
    if(typeof expression[i] === 'number' || expression[i] === '+' || expression[i] === '-') {
      stack.push(expression[i])
    } else if (expression[i] === '*') {
      let first = stack.pop()
      let result = first * expression[i+1]
      stack.push(result)
      i++;
    } else if (expression[i] === '/') {
      let first = stack.pop()
      let result = Math.floor(first / expression[i+1])
      stack.push(result)
      i++;
    }
  }

  let result = stack[0];
  for (var j = 1; j < stack.length; j += 2) {
    if(stack[j] === "+") {
      result += stack[j+1]
    }
    if(stack[j] === "-") {
      result -= stack[j+1]
    }
  }
  console.log("return result: ", result)
  return result
};

var isOperation = function(s) {
  return ['+', '-', '*', '/'].includes(s)
}

var isInt = function(s) {
  return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(s)
}

console.log('result: ', 14 + 21/3 * 4 - 4/ 2+1 * 3)
calculate("14 + 21/3 * 4 - 4/ 2+1 * 3")
// calculate("4/ 2 + 1 * 3")
// calculate("42 * 10 /5+3")