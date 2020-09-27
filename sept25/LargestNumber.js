/*
Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:
Input: [10,2]
Output: "210"

Example 2:
Input: [3,30,34,5,9] -> 9, 5, 34, 3, 30
Output: "9534330"

Example 3:
Input: [312,3042,39, 32, 3, 5, 9, 91] -> 9, 91 5, 39, 3, 32, 312, 3042
Output: "9915393323123042"

Note: The result may be very large, so you need to return a string instead of an integer.
*/

var largestNumber = function (nums) {
  var resultStr = '';
  nums.sort().reverse();
  for (var k = 9; k > 0; k--) {
    let set = [];
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] === k || Number(nums[i].toString()[0]) === k) {
        set.push(nums[i])
      }
    }
    let resort = true;
    while (resort) {
      resort = false
      for (var j = 0; j < set.length - 1; j++) {
        let sorted = sort(set[j], set[j + 1])
        if (sorted[0] === set[j + 1] && sorted[1] === set[j]) {
          set[j] = sorted[0];
          set[j+1] = sorted[1];
          resort = true
        }
      }
    }
    resultStr = resultStr + set.join('')
  }
  return resultStr;

};

sort = (num1, num2) => {
  let largerVal = (num1 > num2) ? num1 : num2;
  let smallerVal = (num1 > num2) ? num2 : num1;
  if (largerVal.toString().length === smallerVal.toString().length) {
    return [largerVal, smallerVal]
  } else {
    for (var i = 0; i < largerVal.toString().length; i++) {
      if (Number(largerVal.toString()[i]) > Number(smallerVal.toString()[i])) {
        return [largerVal, smallerVal]
      }
      if (!smallerVal.toString()[i + 1]) {
        return (Number(smallerVal.toString()[i]) > Number(largerVal.toString()[i + 1])) ? [smallerVal, largerVal] : [largerVal, smallerVal]
      }
      if (Number(largerVal.toString()[i]) < Number(smallerVal.toString()[i])) {
        return [smallerVal, largerVal]
      }
    }
  }
}


// console.log(sort(322, 3042))
// console.log(sort(222, 2042))
// console.log(sort(232, 2))
// console.log(sort(212, 2))
// console.log(sort(3242, 3))

console.log(largestNumber([322, 3042, 39, 32, 3, 5, 9, 93, 912]))