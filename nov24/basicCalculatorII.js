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
  var firstNum = 0;
  var curOp = 0;

  for (var i = 0; i < s.length; i++) {
    if(['+', '-', '*', '/'].includes(s[i])) {
      curOp = i;
      expression.push(Number(s.slice(firstNum, curOp)))
      expression.push(s[i])
      firstNum = i + 1;
    }
    if (i === s.length - 1) {
      expression.push(Number(s.slice(firstNum, s.length)))
    }
  }
    
  let stack = [];
  for (var i = 0; i < expression.length; i++) {
    if (typeof expression[i] === 'number' || expression[i] === '+' || expression[i] === '-') {
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




console.log('result: ', 14 + 21/3 * 4 - 4/ 2+1 * 3)
calculate("14 + 21/3 * 4 - 4/ 2+1 * 3")
// calculate("4/ 2 + 1 * 3")
// calculate("42 * 10 /5+3")