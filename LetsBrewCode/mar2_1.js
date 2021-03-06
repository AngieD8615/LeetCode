/**
 * You are given an array prices where prices[i] is the price of a given stock 
 * on the ith day. You want to maximize your profit by choosing a single day to
 * buy one stock and choosing a different day in the future to sell that stock. 
 * Return the maximum profit you can achieve from this transaction. If you cannot 
 * achieve any profit, return 0.
 */
// i: [2, 4, 6, 1, 4]

const maxProfit0 = (prices) => {
  if (prices.length === 0 || prices.length === 1) return 0
  if (prices.length === 2) return prices[1] > prices[0] ? prices[1] - prices[0] : 0
  let maxProf = 0
  let left = 0
  let right = 1

  while (right < prices.length) {
    let isLess = false
    if (prices[right] < prices[left]) {
      isLess = true
    }
    if (prices[right] > prices[left]) {
      maxProf = Math.max(maxProf, prices[right] - prices[left])
    } 
    if (isLess) {
      left = right;
    }
    right++
  }
  return maxProf
}

const maxProfit = (prices) => {
  let maxProf = 0
  let buy = prices[0]

  for (var i = 1; i < prices.length; i++) {
    let p = prices[i]
    maxProf = Math.max(maxProf, p - buy)
    buy = Math.min(buy, p)
  }
  return maxProf
}

console.log(maxProfit([34, 45, 23,12, 65]))

class FreqStack {
  constructor() {
    this.stack = [];
    this.fre = {};
    this.mostFre = null;
  }

  push(val){
    this.stack.push(val)
    if (!this.fre[val]) {
      this.fre[val] = 1
    } else {
      this.fre[val]++
    }
    this.findMostFre()
    console.log(this.stack, this.mostFre)
  }

  pop(){
    let mostFrequent = this.mostFre;
    for (var i = this.stack.length - 1; i >= 0; i--) {
      if (this.stack[i] === mostFrequent) {
        this.stack.splice(i, 1)
        break;
      }
    }
    this.findMostFre()
    
    console.log(this.stack, this.mostFre)
    return mostFrequent
  }

  findMostFre() {
    this.mostFre = null
    for (var i = 0; i < this.stack.length; i++) {
      if (this.mostFre === null || this.fre[this.stack[i]] >= this.mostFre) {
        this.mostFre = this.stack[i]
      }
    }
  }
}

let f = new FreqStack()
f.push(5) 
f.push(7) 
f.push(5) 
f.push(7) 
f.push(4) 
f.push(5) 
f.pop() // Return 5
f.pop() // Return 7
f.pop() // Return 5
f.pop() // Return 4
