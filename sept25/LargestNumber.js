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

// time to run ~ 190ms 
var largestNumber = function (nums) {
  var resultStr = '';
  nums.sort().reverse();
  if (nums[0] === 0 && nums[nums.length - 1] === 0) return '0'
  var i = 0;
  for (var k = 9; k >= 0; k--) {
    let set = [];
    for (i; i < nums.length; i++) {
      if (nums[i] === k || Number(nums[i].toString()[0]) === k) {
        set.push(nums[i])
      } else {
        break;
      }
    }
    let resort = true;
    while (resort) {
      resort = false
      for (var j = 0; j < set.length - 1; j++) {
        if (set[j] === set[j + 1]) {
          continue;
        }
        let sorted = sort(set[j], set[j + 1])
        console.log(sorted)
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

// looks cleaner but slower to run. ~650ms WHY IS THAT????
// var largestNumber = function (nums) {

//   let resort = true;
//   while (resort) {
//     resort = false
//     for (var i = 0; i < nums.length - 1; i++) {
//       let sorted = sort(nums[i], nums[i + 1])
//       if (sorted) {
//         resort = true;
//         [nums[i], nums[i + 1]] = sorted;
//       }
//     }
//   }
//   if (nums[0] === 0 && nums[nums.length - 1] === 0) return '0'
//   return nums.join('');
// }


sort = (num1, num2) => {
  let num1num2 = Number('' + num1 + num2);
  let num2num1 = Number('' + num2 + num1);
  if (num1num2 === num2num1) return undefined;
  return (num1num2 > num2num1) ? undefined : [num2, num1];
}


// console.log(largestNumber([824,938,1399,5607,6973,5703,9609,4398,8247]) === "9609938824824769735703560743981399")
// console.log(largestNumber([121, 12]), largestNumber([121, 12]) === "12121")
console.log(largestNumber([3, 43, 48, 94, 85, 33, 64, 32, 63, 66]), 9485666463)
