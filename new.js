function fizzBuzz(n) {
  // Write your code here
  let result = ''
  for (var i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0){
          result += "FizzBuzz"
      } else if (i % 3 === 0) {
          result += "Fizz"
      } else if (i % 5 === 0) {
          result += "Buzz"
      } else {
          result += `${i}`
      }
      if (i !== n) {
          result += "\n"
      }
  } 
  return result
}

console.log(fizzBuzz(5));