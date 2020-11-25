// Given a list of words, return the shortest unique prefix of each word. For example, given the list:

// `['dog', 'cat', 'apple', 'apricot', 'fish']`

// Return the list: `['d', 'c', 'app', 'apr', 'f']`

// 
// edge case: same word repeated but with additional character(s)

const uniquePrefix = (arr) => { 
  let uniquePrefixes = [];
  const helper = (prefix, compareToArr) => {
    // base case: if none of the compareToArr startsWith prefix
      // push into uniquePrefixes
      // 

    // non base case: if the is a word in the compareToArr with startsWith prefix
      // add a character to the prefix
      // recall the helper with the same comparToArr
  }
  helper('', arr)
}