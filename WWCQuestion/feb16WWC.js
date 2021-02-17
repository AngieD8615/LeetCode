// February 16: Sock Merchant: John works at a clothing store. He has a large pile of 
// socks that he must pair by color for sale. Given an array of integers representing 
// the color of each sock, determine how many pairs of socks with matching colors there are.
// For example, there are n=7 socks with colors ar = [1,2,1,2,1,3,2]. There is one pair of 
// color 1 and one of color 2. There are three odd socks left, one of each color. The number 
// of pairs is 2.

/* 

I: arr of numbs
O: integer representing the number of pairs
E: if the arr is empty?
C: elements in the arr are int, the number of elements is something the 

[1,1,1,2,2,2,3]
 L     R         -> L = 0 R = 3  -> 3 - 0 = 3  3/2 and round down => 1
       L     R   -> L = 3 R = 6  -> 6 - 3 = 3  3/2 and round down => 1
                  stop when right is at the end


[1,1,1,2,2,2,3,3]
 L     R         -> L = 0 R = 3  -> 3 - 0 = 3  3/2 and round down => 1
       L     R   -> L = 3 R = 6  -> 6 - 3 = 3  3/2 and round down => 1
             L R -> L = 6 R = 7  -> (R+1) - L = (7+1)  - 6 = 2   2/2 and round down => 1 
                 stop when right is at the end



sort the array
declare a count 
declare Right and Left variable

while loop (while R less than length of arr)
  if value at right is the same as the value at left
    if right is at the last element
      let incBy round down (R+1 - L) / 2 
      increase count by incBy
    inc right
  else
    let incBy = round down (R - L) / 2
    increase count by incBy
    left reassigned to right
    inc right

return count

time complexity O(nlogn)


I: arr of numbs
O: integer representing the number of pairs
E: if the arr is empty?
C: elements in the arr are int, the number of elements is something the 

[1,2,1,2,1,3,2]

let freCounter = {}
iterate over the array
  if freCounter doesn't have the as a key
    insert that key with a value of 1
  else 
    inc the value

{
  "1": 3,
  "2": 3,
  "3": 1
}
declare a counter
for loop over the object
  take each value (3, 3, 1) divide by 2 and round down increment the counter

return counter



*/