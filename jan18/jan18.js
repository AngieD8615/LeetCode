// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum 
// equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

var maxOperations = function(nums, k) {
    nums = nums.sort((a, b) => a - b);
    
    let count = 0;
    let left = 0;
    let right = nums.length - 1;
    
    console.log(nums);
    while (left < right) {
      if (nums[left] + nums[right] === k) {
        count++;
        left++;
        right--;
        console.log(left, nums)
      } else if (nums[left] + nums[right] > k) {
        right--;
      } else if (nums[left] + nums[right] < k) {
        left++;
      }
    }

    console.log(count)
    return count;
};

maxOperations([1,2,3,4], 5)