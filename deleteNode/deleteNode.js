// delete a node in a singly linked list
// not given the head
// given the node to be deleted
// not a tail node
// uniq values

/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// given node: {val: 3, next: {val: 4, next: null }}
var deleteNode1 = function(node) {
    // question: how to access the head?
    var root = this;  // ?? assuming root is not the linked list

    helper = (curNode) => {
      if (curNode === null) {return root}
      
      // base: when curNode.next.val === node.val
        // set curNode.next to node.next
      
      if (curNode.next.val === node.val) {
        curNode.next = node.next;
        return root;
      }
      helper(curNode.next)
      // non base not equal
        // helper(curNode.next)
    }
    helper(root);

};

var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

let test = {
  val: 1, 
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: null
          }
        }
      }
    }
  }
}
test.deleteNode = deleteNode;

let testInput = {
  val: 3,
  next: {
    val: 4,
    next: {
      val: 5,
      next: {
        val: 6,
        next: null
      }
    }
  }
}

console.log(test.deleteNode(testInput))
console.log(JSON.stringify(test))
