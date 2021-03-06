/*
Short Encoding of Words
A valid encoding of an array of words is any reference string s 
and array of indices indices such that:

words.length == indices.length
The reference string s ends with the '#' character.
For each index indices[i], the substring of s starting from indices[i] 
and up to (but not including) the next '#' character is equal to words[i].
Given an array of words, return the length of the shortest reference 
string s possible of any valid encoding of words.


Example 1:
Input: words = ["time", "me", "bell"]
Output: 10
Explanation: A valid encoding would be s = "time#bell#" and indices = [0, 2, 5].
words[0] = "time", the substring of s starting from indices[0] = 0 to the next '#' is underlined in "time#bell#"
words[1] = "me", the substring of s starting from indices[1] = 2 to the next '#' is underlined in "time#bell#"
words[2] = "bell", the substring of s starting from indices[2] = 5 to the next '#' is underlined in "time#bell#"

Example 2:
Input: words = ["t"]
Output: 2
Explanation: A valid encoding would be s = "t#" and indices = [0].

Constraints:
1 <= words.length <= 2000
1 <= words[i].length <= 7
words[i] consists of only lowercase letters.
 */

var minimumLengthEncoding01 = function(words) {
  let s = ""
  let indices = []
  let hashTags = []
  
  for (var word of words) {
    let len = word.length
    for (var hashTag of hashTags) {
      let wordStart = hashTag - len - 1
      if (wordStart >= 0 && s.slice(wordStart, s.length - 1) === word) {
        indices.push(wordStart)
        continue;
      } else {
        indices.push(s.length)
      }
      
      s += `${word}#`
    }
  }
  console.log(s)
  return s.length
};

var minimumLengthEncoding = function(words) {
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j <  words.length; j++) {
      if (i !== j) { 
        if (words[i].length >= words[j].length) {
          if (words[i].slice(-words[j].length) === words[j]) {
            words.splice(j, 1)
          }
        } else if (words[i].length < words[j].length) {
          if (words[j].slice(-words[i].length) === words[i]) {
            words.splice(i, 1)
          }
        }
      }
    }
  }
  wordStr = `${words.join("#")}#`
  return wordStr.length
}

/**
 * ["me", "time"] -> time# -> 5
 * ["time", "button", "me", "on"] -> time#button# -> 12 
 * ["time", "time", "time", "time"] -> time# -> 5
 */




console.log(minimumLengthEncoding(["time", "time", "time", "time"])) 
