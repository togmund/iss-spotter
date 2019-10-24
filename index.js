/*
The Approach
We'll be making API requests to three different services to solve this problem.

Fetch our IP Address
Fetch the geo coordinates (Latitude & Longitude) for our IP
Fetch the next ISS flyovers for our geo coordinates
Each later step is dependent on data from the previous one.

We will eventually be able to use our app in the following way:

> node index.js
Next pass at Fri Jun 01 2021 13:01:35 GMT-0700 (Pacific Daylight Time) for 465 seconds!
*/
// const { issSomething } = require("./iss");
// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });