var kidsWithCandies = function(candies, extraCandies) {
  // iterate through the array. Find the greatest value.
  let max = candies[0];
  candies.forEach(candy => {
      max = Math.max(max, candy);
  })
  console.log("max: ", max)
  // map through array. return if the current value + exrta is greater than max
  let hasMax = candies.map(candy => {
      return candy + extraCandies >= max;
  })
  console.log("after map ", hasMax)
  // return array
  return hasMax;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));