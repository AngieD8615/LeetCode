function revStr(chars) {  // chars = ["h", "e", "l", "l',"o"]
  // where char is an arr of chars
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {   // 1 < 3
    
    let newFirst = chars[right];  // "l"
    chars[right] = chars[left];  // ["h", "e", "l", "e',"h"]
    chars[left] = newFirst;  // ["o", "l", "l", "e',"h"]
    left++;  // 2
    right--;  // 2
  }
  return chars;
}

console.log(revStr(["h", "e", "l", "l","o"]))