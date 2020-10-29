/*
Problem Description
Given an array of strings, use the JavaScript map() function to return an array containing length of string at each index. The input array can be of length 0.



Input -
You are given an array named, arr.

Output -
Return the array containing the length of string at each index.

Sample input 1 -
["hello","world"]

Sample output 1 -
[5, 5]
*/

function findLength(arr) {
  if( arr.length === 0) {
      return [0]
  }
  
  arr = arr.map((str) => {
      if ( str == null) {
          str.length = 0
      }
      return str.length
  })
  return arr;
}



const myArr = ["@"]

console.log(findLength(myArr))