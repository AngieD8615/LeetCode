/*
Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where 
indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.

Return the number of cells with odd values in the matrix after applying the increment to all indices.

Example 1:
Input: n = 2, m = 3, indices = [[0,1],[1,1]]
Output: 6
Explanation: Initial matrix = [[0,0,0],[0,0,0]].
After applying first increment it becomes [[1,2,1],[0,1,0]].
The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.

Example 2:
Input: n = 2, m = 2, indices = [[1,1],[0,0]]
Output: 0
Explanation: Final matrix = [[2,2],[2,2]]. There is no odd number in the final matrix.
 
Constraints:
1 <= n <= 50
1 <= m <= 50
1 <= indices.length <= 100
0 <= indices[i][0] < n
0 <= indices[i][1] < m

*/
// i: dimension 


var oddCells = function(n, m, indices) {
  let arr = new Array(n)
  let inner = new Array(m)

  arr.fill([...inner.fill(0)])
  console.log("og", arr)
  
  indices.forEach((set) => {
    arr[set[0]] = arr[set[0]].map(val => val + 1)
    arr.forEach(row => {
      row[set[1]]++
    })
  })
  console.log("mod", arr)

  arr = arr.map(row => {
    let innerCount = 0
    row.forEach(val => {
      if (val % 2 === 1) innerCount++
    })
    return innerCount
  })

  return arr.reduce((val, memo) => val + memo)

};

console.log(oddCells(28, 38, [[17,16],[26,31],[19,12],[22,24],[17,28],[23,21],[27,32],[23,27],[23,33],[18,7],[4,20],[0,31],[25,33],[5,22]]))