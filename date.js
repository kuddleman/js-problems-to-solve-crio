/*
Problem Description
You are given a date in the form of "DD/MM/YYYY". Calculate the number of days between the given date and today's date.


Today's day is the date when the program is executed.


Note

Sample I/O considers today's date as 28/08/2020

You may assume all the dates in the input are correct and in the given format

The given date is in the past as compared to today

JavaScript new Date() constructor takes in date in the "MM/DD/YYYY" format

Input
You are given a string containing the date in the given format

Output
Return the number of days between today and the given date.

Sample input 1
10/08/2020

Sample output 1
18


*/







function getNumberOfDays(date) {

  // calculate today's date in Millsec from 1970
  const todaysDateInMs =  new Date(2020, 7, 28).getTime()

 const dateArr = date.split("/")

 const day = dateArr[0]
 const dayToInt = parseInt(day)

 let month = dateArr[1]
 month --
 const monthToInt = parseInt(month)

 const year = dateArr[2]
 const yearToInt = parseInt(year)

  // calculate parameter's date from 1970 in millsec
 const paramDateInMs = new Date(yearToInt, monthToInt, dayToInt).getTime()
 
//console.log(paramDateInMs)

//calculate difference between dates in seconds
const diffSec =  Math.abs((paramDateInMs - todaysDateInMs)/1000)

//console.log(diffSec)

// calculate difference between dates in days
const diffDays = diffSec/86400

//console.log(diffDays)

return diffDays
   
}  


console.log(getNumberOfDays("01/05/2017"))

