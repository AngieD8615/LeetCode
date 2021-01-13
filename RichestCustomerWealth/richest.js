/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  // use map to reduce each inner array
  accounts = accounts.map((account) => {
    return account.reduce((accumulator, curVal) => {
      return accumulator + curVal;
    }, 0)
  })


  // iterate through array of sums to find the max value
  let richest = -Infinity;
  accounts.forEach((amount) => {
    richest = Math.max(richest, amount);
  })
  // return max
  return richest;
};

console.log(maximumWealth([[1,5, 4, 6, 2],[7,3, 3, 7,5]]));