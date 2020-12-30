var findMaxConsecutiveOnes = function(nums) {
  // define 2 pointers both starting from the left (lead and lag)
  // define a max consecutive count
    
  let leadPointer = 0;
  let lagPointer = 0;
  let maxConsec = 0;
  let isConsec = false

  while (leadPointer < nums.length) {
     
      if (nums[leadPointer] === 1 && !isConsec) {
          lagPointer = leadPointer;
          isConsec = true;
      } else if ((nums[leadPointer] !== 1 || nums[leadPointer] !== undefined) && isConsec) {
          maxConsec = Math.max(maxConsec, leadPointer - lagPointer);
          isConsec = false;
      }
      leadPointer++;

  } 
  return maxConsec;
};

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1,1,1]))