/*
Given a string S, we can transform every letter individually to upper or lower case. Return a list of all possible results. 
string will only contain letter and numbers
*/

// "a3sDF" => [a3s, A3s, A3S,  a3S]     


//                         ""
//                   /            \
//                 a                A
//                |                  |
//                a3                 A3
//             /     \               /       \  
//           a3s     a3S           A3s        A3S    
//          /   \     /  \        /   \     /  \
//        a3sd  a3sD a3Sd a3SD  A3sd  A3sD A3Sd A3SD


const transform = (S) => {
  
  // change all chars to lowercase
  const s = S.toLowerCase();  // a1
  // result arr
  let result = [];  // ["a1"]
  // helper to build the tree -> inputs curStr
  const helper = (curStr, count) => {  // ("a", 1)  // ("a1", 2)
    // base case -> if the curStr length is equal to s length 
    if (curStr.length === s.length){
      // push the curStr into the result arr
      result.push(curStr);
      // stop
      return;
    }
    else {
    // not at base case yet 
      // apply helper to curStr + next Char
      helper(curStr + s[count], count + 1)   // helper("a" ,1)  // helper("a1", 2)
      // apply helper to curStr + next Char.Upper
      if(s[count] !== s[count].toUpperCase()) {
        helper(curStr + s[count].toUpperCase(), count + 1)  //helper("A", 1)  // helper("a1", 2)
      }
    }
  }
  // invoke helper
  helper("",0)  //helper("a1", 0)
  return result
}



console.log(transform("A1s4ts3"), 2**4 === transform("A1s4ts3").length)  // -> ["a1", "A1"]