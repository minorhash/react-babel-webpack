const req= require('request');
req('http://localhost:3000', function (err, res, body) {
console.log('error:', err); // Print the error if one occurred
console.log('statusCode:', res); // Print the response status code if a response was received
//console.log('body:', body); // Print the HTML for the Google homepage.
});
