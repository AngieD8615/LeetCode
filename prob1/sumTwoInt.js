/*
Given to non neg int num1 and num2  represented as string, return the sum of num1 and num2. 
example "345" + "15"

*/

// i: 2 strings that represent numbers
// o: an integer that is the value of num1 + num2

const sumNums = (num1, num2) => {
  let pointer1 = num1.length - 1
  let pointer2 = num2.length - 1
  let result = ""
  let needToCarry = false;
  
  while (pointer1 >= 0 || pointer2 >= 0 ) {
    let curNum1 = pointer1 >= 0 ? Number(num1[pointer1]) : 0
    let curNum2 = pointer2 >= 0 ? Number(num2[pointer2]) : 0
    let current = needToCarry ? curNum1 + curNum2 + 1 : curNum1 + curNum2
    let currentAsString = current.toString()
    if (current < 10) {
      result = currentAsString + result
      needToCarry = false;
    } else {
      needToCarry = true
      result = currentAsString[1] + result
    }
    pointer1--;
    pointer2--;
  }
  if (needToCarry) {
    result = "1" + result
  }
  return result
}

console.log(sumNums("634", "728"))
