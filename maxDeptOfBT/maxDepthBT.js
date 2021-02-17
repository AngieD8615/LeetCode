var maxDepth = function (root) {
  if (root === null) {
    return 0;
  } else if (root.left === null && root.right === null) {
    return 1;
  }

  var curCount = 0;
  var maxCount = 0;
  const helper = (node) => {
    // base case
    if (node.left === null && node.right === null) {
      curCount++;
      maxCount = Math.max(curCount, maxCount);
      curCount--;
      return;
    }
    // non base
    if (node.left) {
      curCount++;
      helper(node.left);
      curCount--;
    }
    if (node.right) {
      curCount++;
      helper(node.right);
      curCount--;
    }
  };
  helper(root);
  return maxCount;
};
