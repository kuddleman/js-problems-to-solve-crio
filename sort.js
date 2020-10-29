/*
Problem Description
Given an array of account objects. Account object contains two keys

created

accountHolderName


Sort the array in the following way -

All the elements should be sorted according to the created field such that the most recently created account comes first.

If two accounts are created on the same date then they should be ordered in ascending order of account holders name.

References
JavaScript sort method

JavaScript sorting by two fields

JavaScript comparing Strings

Input -
An array of account objects.

Output -
Return the array after sorting it.

Sample input 1 -

[

   {

        created: new Date("05/22/1859"),

        accountHolderName: "Arthur"

   },

   {

        created: new Date("03/25/2001"),

        accountHolderName: "Doyle"

   },

   {

        created: new Date("03/25/2001"),

        accountHolderName: "Conan"

   }

]

Sample output 1 -

[

   {

       created: new Date("03/25/2001"),

       accountHolderName: "Conan"

   },

   {

       created: new Date("03/25/2001"),

       accountHolderName: "Doyle"

   },

   {

       created: new Date("05/22/1859"),

       accountHolderName: "Arthur"

   }

]

*/

function sortAccounts(arr) {
  arr.sort((a,b)=>{
   return a["created"] - b["created"] || a["accountHolderName"] - b["accountHolderName"]
  })
  
}

const myArr = [

 {

      created: new Date("05/22/1859"),

      accountHolderName: "Arthur"

 },

 {

      created: new Date("03/25/2001"),

      accountHolderName: "Doyle"

 },

 {

      created: new Date("03/25/2001"),

      accountHolderName: "Conan"

 }
]

console.log(sortAccounts(myArr))

//console.log(sortAccounts(myArr))
