/*
Problem Description
Given a character X you need to find whether X is an alphabet or not.

If yes, return a string "Yes" or otherwise throw an error with the message "Not Alphabet".


Input
You are given character X.

Output
Return string "Yes" or throw the error as per problem statement.

Sample input 1
A

Sample output 1
Yes

Sample input 2
0

Sample output 2
Function should throw an error with message "Not Alphabet".
*/

function isAlphabet(X) {
    
  if ((/[a-zA-Z]/).test(X)) {
      return 'Yes'
  } 
  try {
    if (!(/[a-zA-Z]/).test(X)) throw 'Not Alphabet'
        
  }
  catch(e) {
      console.log(e)
  }
    



};

console.log(isAlphabet("0"))