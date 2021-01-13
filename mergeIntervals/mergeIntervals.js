var merge = function(intervals) {
  intervals = intervals.sort((a, b) => {
      return a[0] - b[0]
  })
  console.log(intervals)
let result = [];
// 
let nextInterval = intervals[0];
for (var i = 0; i < intervals.length; i++) {
    if(nextInterval[1] >= intervals[i][0] ) {
        nextInterval[1] = Math.max(nextInterval[1], intervals[i][1])
    } else {
        result.push([...nextInterval]);
        nextInterval = intervals[i];
    }
    if (i === intervals.length - 1) {
      result.push([...nextInterval]);
    }
}
return result
};

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))