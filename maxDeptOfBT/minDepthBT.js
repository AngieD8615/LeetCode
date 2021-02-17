/*
            1
         /     \
       2         3
    /    \     
   4      6 

*/

var minDepth = (root) => {
  if (root === null) return 0
  if (root.left === null && root.left === null) return 1
  let counter = 0
  let minDepth = -Number.MAX_VALUE

  const helper = (node) =>{
    // base case -> if the node has no children
    if (node.left === null && node.right === null) {
      counter++
      minDepth = Math.min(counter, minDepth)
      counter--
      return
    }
    if (node.left) {
      counter++;
      helper(node.left)
      counter--
    }
    if (node.right) {
      counter++
      helper(node.right)
      counter--
    }
    
  }
  helper(root)
  return minDepth
}