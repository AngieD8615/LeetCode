/**
 * If I give you coins of denominations {3, 7, 9} (a coin worth 3 cents, 
 * a coin worth 7 cents, etc.), can you tell me the minimum number of 
 * coins that are needed to make a total of 37? You can assume that an 
 * infinite supply of all these coins are available to you.
 */

const coinChange = (coinOptions, val) => {
  let numOfCoins = Infinity;
  let shouldStop = false;
  coinOptions = coinOptions.sort((a, b) => b - a)
  const helper = (curSum, curNum, index) => {
    if (curSum === val) {
      numOfCoins = Math.min(curNum, numOfCoins)
      shouldStop = true
      return
    } 
    if (!shouldStop) {
      for (var i = index; i < coinOptions.length; i++) {
        if (curSum + coinOptions[i] <= val) {
          helper(curSum + coinOptions[i], curNum + 1, i)
        }
        
      }
    }
      
  }
  helper(0, 0, 0)

  return numOfCoins === Infinity ? -1 : numOfCoins;
}

/**
1. coins = {2,3,5}      amount = 11:     use 3 coins, e.g., [3,3,5]
2. coins = {2,3,5,7}    amount = 17:     use 3 coins, e.g., [3,7,7]
3. coins = {2,3,7}      amount = 15:     use 4 coins, e.g., [2,3,3,7]
4. coins = {3,5}        amount = 7:      Not possible (inf)
5. coins = {20,15,8}      amount = 1:      Not possible (inf)
 */
console.log(`
  1. ${coinChange([2,3,5], 11) === 3} 
  2. ${coinChange([2, 5, 7, 3], 17) === 3} 
  3. ${coinChange([7, 2, 3], 15) === 4}
  4. ${coinChange([3, 5], 7) === -1}
  5. ${coinChange([20, 15, 8], 42) === -1}`
) 