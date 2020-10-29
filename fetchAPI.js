/*

Problem Description
You are given the following API -


GET /api/comments


This will return a list of all comments. A comment object contains the following information

userId - ID of the user who commented

data - comment data


Given a userId, return an Array of comment data of all the comments by the given user.

References
Fetch API

JavaScript: await

JavaScript: async

Input -
userId - the user id whose comment is to be returned.

Output -
A list of comments by the given user id

Sample input 1 -

userId = 1

Sample API response


comments = [

{

    'userId': '1',

    "data": 'This looks slick!'

},

{

    'userId': '2',

    "data": 'I think this can be improved.'

},

{

    'userId': '1',

    "data": 'What kind of improvement?'

}]

Sample output 1 -
['This looks slick!', 'What kind of improvement?']

*/

async function getCommentsByUserId(userId) {
  const getComments = fetch('https://api/comments')
  .then(response => response.json())
  .then(json => console.log(json.userId))
  

}

module.exports = getCommentsByUserId;
