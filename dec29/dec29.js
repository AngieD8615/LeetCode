/*
Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be pseudo-palindromic if at least one permutation of the node values in the path is a palindrome.

Return the number of pseudo-palindromic paths going from the root node to leaf nodes.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const pseudoPalindromicPaths  = function(root) {
  let paths = [];
  // create an array of arrays showing all possible paths. 
  createPaths(root, 0, [], paths)
  
  // map each path to a true or false stating if it is a pseudoPalindrome
  paths = paths.map(arr => {
    return isPseudoPalindromic(arr);
  });

  // count the number of pseudoPalindromes
  let count = 0
  paths.forEach(el => {
    if(el) {
      count++;
    }
  })
  
  // return number of pseudoPalindromes
  return count;
};

const createPaths = (root, nodeIndex, history, paths) => {
  // push current value into history
  history.push(root[nodeIndex]);
  
  // base case: leaf
  // if leaf (2*nodeIndex + 1 and 2*nodeIndex + 1 are both null or undefined)
    // push history into global paths. 
  if (!root[2*nodeIndex + 1] && !root[2*nodeIndex + 2]) {
    let path = [...history];
    paths.push(path);
    return;
  } else {

    // if 2*nodeIndex + 1 exists
      // apply createPaths on that index
      // remove node
    // if 2*nodeIndex + 2 exists
      // apply createPaths on that index
      // remove node
    if (root[2 * nodeIndex + 1]) {
      createPaths(root, 2 * nodeIndex + 1, history, paths)
      history.pop()
    }
    if (root[2 * nodeIndex + 2]) {
      createPaths(root, 2 * nodeIndex + 2, history, paths)
      history.pop()
    }
  }
}

const isPseudoPalindromic = (arr) => {
  // use object to keep track if an node has occurred an even number of times.
  let evenOccurrence = {};
  arr.forEach((el, i) => {
    if(evenOccurrence[el] === undefined) {
      evenOccurrence[el] = false;
    } else {
      evenOccurrence[el] = !evenOccurrence[el];
    }
  })

  // count number of odd occurring nodes
  let numOfOdd = 0;
  for (var key in evenOccurrence) {
    if (!evenOccurrence[key]) {
      numOfOdd++
    }
  }
  
  // if the number of odd occurring nodes is less than or equal to 1, 
    // return true. Else return false.
  return numOfOdd <= 1
}
