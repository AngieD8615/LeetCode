/**
 * Write a function that reverses a string. The input string is given as 
 * an array of characters char[].

 * Do not allocate extra space for another array, you must do this by 
 * modifying the input array in-place with O(1) extra memory.

 * You may assume all the characters consist of printable ascii characters.

 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const switchChar = (i, j) => {
      let temp = s[i]; 
      s[i] = s[j];
      s[j] = temp;
    }
    let i = 0;
    let j = s.length - 1;
    while (i < Math.floor(s.length / 2)) {
      switchChar(i, j);
      i++;
      j--;
    }
};
let str1 = ["h", "e", "l", "l", "o"]
console.log("function", reverseString(str1)) // undefined
console.log("str1", str1) // ["o", "l", "l", "e", "h"]