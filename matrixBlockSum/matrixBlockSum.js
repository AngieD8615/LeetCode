/*
Given a m * n matrix mat and an integer K, return a matrix answer where 
each answer[i][j] is the sum of all elements mat[r][c] for 
  i - K <= r <= i + K,
  j - K <= c <= j + K, 
and (r, c) is a valid position in the matrix.
 

Example 1:
Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 1
Output: [[12,21,16],[27,45,33],[24,39,28]]

Example 2:
Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 2
Output: [[45,45,45],[45,45,45],[45,45,45]] 

Constraints:
m == mat.length
n == mat[i].length
1 <= m, n, K <= 100
1 <= mat[i][j] <= 100
*/

var matrixBlockSum = function(mat, K) {
  let result = [];
  for (var i = 0; i < mat.length; i++) {
    let row = []
    let rMin = Math.max(i - K, 0)
    let rMax = Math.min(i + K, mat.length - 1)
    for (var j = 0; j < mat[0].length; j++) {
      let cMin = Math.max(j - K, 0)
      let cMax = Math.min(j + K, mat[0].length - 1) 
      let sum = 0;
      let curRow = rMin
      while (curRow <= rMax) {
        let curCol = cMin
        while (curCol <= cMax ) {
          sum += mat[curRow][curCol]
          curCol++
        }
        curRow++
      }
      row.push(sum)
    }
    result.push(row)
  }
  return result;
};

let mat = [[1,2,3],[4,5,6],[7,8,9]]
let k = 1

console.log(matrixBlockSum(mat, k))
