/*
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:
Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Example 2:
Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

Example 3:
Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"

Example 4:
Input: word1 = "cabbba", word2 = "aabbss"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any amount of operations.
 

Constraints:

1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.
*/
// var closeStrings1 = function(word1, word2) {
//   if (word1.length !== word2.length) return false;
  
//   const freqCounter = (str) => {
//     let count = {};
//     for (var i in str) {
//       if (!count[str[i]]) {
//         count[str[i]] = 1;
//       } else {
//         count[str[i]]++
//       }
//     }
//     return count
//   }

//   let count1 = freqCounter(word1) ;
//   let count2 = freqCounter(word2) ;
  
//   for (var char1 in count1) {
//     if (!count2[char1]) return false;
//   }
    
//   for (var char1 in count1) {
//     for (var char2 in count2) {
//       if (count1[char1] === count2[char2]) {
//         delete count2[char2];
//         break;
//       }
//     }
//   }
//   return Object.keys(count2).length === 0;
// };

var closeStrings = function(word1, word2) {
  if (word1.length !== word2.length) return false;
  
  const freqCounter = (str) => {
    let count = {};
    for (var i in str) {
      let curChar = str[i]
      !count[curChar] ? count[curChar] = 1 : count[curChar]++
    }
    return count
  }

  let count1 = freqCounter(word1) ;
  let count2 = freqCounter(word2) ;
  console.log(count1, count2)

  let freq1 = []
  let freq2 = []
  for (var char1 in count1) {
    if (!count2[char1]) return false;
    freq1.push(count1[char1]);
    freq2.push(count2[char1]);
  }
  freq1 = freq1.sort((a,b) => a - b)
  freq2 = freq2.sort((a,b) => a - b)
  
  for (var i = 0; i < freq1.length; i++) {
    if (freq1[i] !== freq2[i]) return false;
  }

  return true;
};

let word1 = "xxxxyya", word2 = "ayxxaaa"
console.log(closeStrings(word1, word2)); //true